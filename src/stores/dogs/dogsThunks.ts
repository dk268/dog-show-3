import { createAsyncThunk } from "@reduxjs/toolkit";
import { BreedWithSubBreed } from "~constants/constantsTypes";
import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import { makeGetAllBreeds, makeGetNumberByBreed, makeGetNumberBySubBreed } from "~urls/urls";
import { batchRequest, request } from "~utils/utils";
import { AllBreed, FetchPicsResponse, ValidDogSelection } from "./dogsModels";

export const getAllBreeds = createAsyncThunk<AllBreed>(
  `${DOGS_SLICE_TYPE}/breeds/list`,
  async () => {
    const response = await request<{ message: AllBreed; status: string }>(makeGetAllBreeds());
    return response.message;
  }
);

export const getRequestedPics = createAsyncThunk<string[], ValidDogSelection[]>(
  `${DOGS_SLICE_TYPE}/pictures/get`,
  async (selections) => {
    const urls = selections.map(({ breed, subBreed, count }) => {
      if (subBreed) {
        const fetchedBreed = breed as BreedWithSubBreed;
        // ^^ casting justified because only breeds with subBreeds can have a subBreed
        return makeGetNumberBySubBreed(fetchedBreed, subBreed, count);
      }

      return makeGetNumberByBreed(breed, count);
    });

    const requests = urls.map((url) => ({ path: url }));

    const responses = await batchRequest<FetchPicsResponse[]>(requests);

    return responses.flatMap(({ message }) => message);
  }
);
