import { DogBreed, DogSubBreed } from "~constants/constantsTypes";
import { DogRowMeta } from "~stores/dogs";

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

const multiwordDictionary: Partial<{ [k in `${DogBreed | DogSubBreed}`]: string }> = {
  bullterrier: "Bull Terrier",
  cattledog: "Cattle Dog",
  cotondetulear: "Coton de Tulear",
  germanshepherd: "German Shepherd",
  mexicanhairless: "Mexican Hairless",
  shihtzu: "Shih Tzu",
  stbernard: "St. Bernard",
  flatcoated: "Flat-coated",
  germanlonghair: "German Longhair",
  kerryblue: "Kerry Blue",
  westhighland: "West Highland",
}; // TODO: Make this checked against a reputable source

export const dogCapitalize = (input: DogBreed | DogSubBreed): string => {
  const doggy = multiwordDictionary[input] ?? null;

  return doggy ?? capitalize(input);
};

export const capitalize = (input: string): string => {
  return input
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");
};

export const getSubBreedValueRender = (
  breed: DogBreed | "",
  subBreeds: DogSubBreed[],
  subBreed: DogSubBreed | ""
): string => {
  if (!breed || !subBreed) return "";
  return dogCapitalize(subBreed);
};

export class DogSelection {
  breed: DogRowMeta["breed"];
  subBreed: DogRowMeta["subBreed"];
  count: DogRowMeta["count"];
  readonly id: number;

  static nextId = 0;

  constructor(
    breed: DogRowMeta["breed"] = "",
    subBreed: DogRowMeta["subBreed"] = "",
    count: DogRowMeta["count"] = 1
  ) {
    this.breed = breed;
    this.subBreed = subBreed;
    this.count = count;
    this.id = ++DogSelection.nextId;
  }

  setBreed = (breed: DogRowMeta["breed"]): DogSelection => {
    if (breed !== this.breed) {
      this.breed = breed;
      this.subBreed = ""; // reset sub-breed if different breed
    }
    return this;
  };

  setSubBreed = (subBreed: DogRowMeta["subBreed"]): DogSelection => {
    this.subBreed = subBreed;
    return this;
  };

  setCount = (count: DogRowMeta["count"]): DogSelection => {
    this.count = count;
    return this;
  };
}
