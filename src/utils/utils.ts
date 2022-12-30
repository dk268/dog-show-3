export const isDevEnv = () => process.env.NODE_ENV !== "production";

class RequestError extends Error {
  constructor(status: number, message: string, response?: Response) {
    super(message);
    this.status = status;
    this.name = `HTTPError (${status})`;
    this.response = response;
  }

  status: number;
  response?: Response;
}

const DEFAULT_ERROR_MESSAGE = "An error occurred during a network request.";

const handleRequestError = async (response: Response): Promise<void> => {
  const { status } = response;
  const unauth = "Request Not Authorized";

  if (status === 401) throw new RequestError(status, unauth);

  // status should be >= 400 by the isOk, but let's be safe anyway...
  if (status >= 400 && status < 500) {
    const badResponse = await response.text();
    const invalidResponse = JSON.parse(badResponse);

    const errorMsg =
      invalidResponse?.error?.status ?? invalidResponse?.message ?? DEFAULT_ERROR_MESSAGE;

    throw new RequestError(status, errorMsg);
  }
  const serverError = "A server error occurred during a network request.";
  throw new RequestError(status, serverError);
};

export const request = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(path, options);
    if (!response.ok) handleRequestError(response);

    return (await response.json()) as T;
  } catch (e) {
    if (isDevEnv()) console.error(e);

    if (e instanceof RequestError) throw e;

    const unexpectedError = e as string;
    throw new Error(unexpectedError);
  }
};

type BatchedRequest = {
  path: string;
  options?: RequestInit;
};
export const batchRequest = async <T>(requests: Array<BatchedRequest>): Promise<T> => {
  try {
    const responses = await Promise.all(
      requests.map(({ path, options = {} }) => fetch(path, options))
    );

    const responseWithError = responses.find(({ ok }) => !ok);
    if (responseWithError !== undefined) await handleRequestError(responseWithError);
    // TODO: add more robust error handling for the case where there are multiple not OK's

    return (await Promise.all(responses.map(async (response) => response.json()))) as T;
  } catch (e) {
    if (isDevEnv()) console.error(e);

    if (e instanceof RequestError) throw e;

    const unexpectedError = e as string;
    throw new Error(unexpectedError);
  }
};
