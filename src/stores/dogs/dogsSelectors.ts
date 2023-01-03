import { createSelector } from "@reduxjs/toolkit";
import { DogAppState } from "..";

const selectDogsState = ({ dogs }: DogAppState) => dogs;

export const selectAllBreeds = createSelector(selectDogsState, ({ allBreeds }) => allBreeds);

export const selectListBreedsStatus = createSelector(
  selectDogsState,
  ({ listBreedsStatus }) => listBreedsStatus
);

export const selectDogSelections = createSelector(
  selectDogsState,
  ({ dogSelections }) => dogSelections
);

export const selectPicUrls = createSelector(selectDogsState, ({ picUrls }) => picUrls);
