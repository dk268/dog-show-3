import { createAsyncThunk } from "@reduxjs/toolkit";
import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import { makeGetAllBreeds } from "~urls/urls";
import { request } from "~utils/utils";
import { AllBreed } from "./dogsModels";

export const getAllBreeds = createAsyncThunk<AllBreed>(
  `${DOGS_SLICE_TYPE}/breeds/list`,
  async () => {
    const response = await request<{ message: AllBreed; status: string }>(makeGetAllBreeds());
    return response.message;
  }
);
