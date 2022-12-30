import { createSlice } from "@reduxjs/toolkit";
import { RequestStatus } from "~constants/commonConstants";
import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import { DogsSlice } from "./dogsModels";
import { getAllBreeds } from "./dogsThunks";

const initialState: DogsSlice = {
  listBreedsStatus: RequestStatus.Idle,
};

const dogsSlice = createSlice({
  name: DOGS_SLICE_TYPE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBreeds.pending, (state) => {
        state.listBreedsStatus = RequestStatus.Pending;
      })
      .addCase(getAllBreeds.rejected, (state) => {
        state.listBreedsStatus = RequestStatus.Error;
      })
      .addCase(getAllBreeds.fulfilled, (state, { payload }) => {
        state.allBreeds = payload;
        state.listBreedsStatus = RequestStatus.Success;
      });
  },
});

export default dogsSlice.reducer;
