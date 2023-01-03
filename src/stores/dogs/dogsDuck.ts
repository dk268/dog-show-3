import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "~constants/commonConstants";
import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import { DogSelection } from "~utils/utils";
import { DogRowMeta, DogsSlice } from "./dogsModels";
import { getAllBreeds, getRequestedPics } from "./dogsThunks";

const initialState: DogsSlice = {
  dogSelections: [new DogSelection()],
  listBreedsStatus: RequestStatus.Idle,
  getPicsStatus: RequestStatus.Idle,
  picUrls: [],
};

const dogsSlice = createSlice({
  name: DOGS_SLICE_TYPE,
  initialState,
  reducers: {
    addDogSelection: (state) => {
      state.dogSelections = [...state.dogSelections, new DogSelection()];
    },
    removeDogSelection: (state, { payload }: PayloadAction<number>) => {
      state.dogSelections = state.dogSelections.filter(({ id }) => id !== payload);
    },
    chooseDogBreed: (
      state,
      { payload }: PayloadAction<{ id: number; breed: DogRowMeta["breed"] }>
    ) => {
      const dogSelection = state.dogSelections.find(({ id }) => id === payload.id);

      if (dogSelection) {
        state.dogSelections = state.dogSelections.map((selection) => {
          if (selection.id !== dogSelection.id) return selection;
          else return selection.setBreed(payload.breed).setSubBreed("");
        });
      }
    },
    chooseDogSubBreed: (
      state,
      { payload }: PayloadAction<{ id: number; subBreed: DogRowMeta["subBreed"] }>
    ) => {
      const dogSelection = state.dogSelections.find(({ id }) => id === payload.id);

      if (dogSelection) {
        state.dogSelections = state.dogSelections.map((selection) => {
          if (selection.id !== dogSelection.id) return selection;
          else return selection.setSubBreed(payload.subBreed);
        });
      }
    },
    chooseDogCount: (
      state,
      { payload }: PayloadAction<{ id: number; count: DogRowMeta["count"] }>
    ) => {
      const dogSelection = state.dogSelections.find(({ id }) => id === payload.id);

      if (dogSelection) {
        state.dogSelections = state.dogSelections.map((selection) => {
          if (selection.id !== dogSelection.id) return selection;
          else return selection.setCount(payload.count);
        });
      }
    },
    clearForm: (state) => {
      state.dogSelections = [state.dogSelections[0].reset()];
      // simply returning initial state causes a render blip because it's making a new first element
      // TODO: refactor initialState to prevent this
      // TODO: remove class implementation for doggy selections
    },
  },
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
      })
      .addCase(getRequestedPics.pending, (state) => {
        state.getPicsStatus = RequestStatus.Pending;
      })
      .addCase(getRequestedPics.rejected, (state) => {
        state.getPicsStatus = RequestStatus.Error;
      })
      .addCase(getRequestedPics.fulfilled, (state, { payload }) => {
        state.picUrls = payload;
        state.getPicsStatus = RequestStatus.Success;
      });
  },
});

export const {
  addDogSelection,
  chooseDogBreed,
  chooseDogSubBreed,
  chooseDogCount,
  clearForm,
  removeDogSelection,
} = dogsSlice.actions;

export default dogsSlice.reducer;
