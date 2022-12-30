import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import { DogsSlice } from "./dogs/dogsModels";

export type DogAppState = {
  [DOGS_SLICE_TYPE]: DogsSlice;
};
