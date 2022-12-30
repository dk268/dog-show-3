import { createSelector } from "@reduxjs/toolkit";
import { DogAppState } from "..";

const selectDogsState = ({ dogs }: DogAppState) => dogs;

export const selectAllBreeds = createSelector(selectDogsState, ({ allBreeds }) => allBreeds);

export const selectListBreedsStatus = createSelector(
  selectDogsState,
  ({ listBreedsStatus }) => listBreedsStatus
);
