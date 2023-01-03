import { Landing } from "./Landing";

import * as appHooks from "~hooks/hooks";

import Chance from "chance";
import { DogAppState } from "~stores/types";
import { DogSelection } from "~utils/utils";
import { RequestStatus } from "~constants/commonConstants";
import { screen } from "@testing-library/react";
import { providedRender } from "~utils/testUtils";

const chance = new Chance();

describe(`The Landing page`, () => {
  const useSelectorMock = jest.spyOn(appHooks, "useAppSelector");

  const mockState: DogAppState = {
    dogs: {
      dogSelections: [new DogSelection()],
      listBreedsStatus: RequestStatus.Idle,
      getPicsStatus: RequestStatus.Idle,
      picUrls: [chance.url()],
    },
  };

  beforeEach(() => {
    useSelectorMock.mockImplementation((callback) => {
      return callback(mockState);
    });
  });
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  test("renders", () => {
    providedRender(<Landing />);

    const element = screen.getByRole("button");

    expect(element).toBeInTheDocument();
  });
});
