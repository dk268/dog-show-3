import { DogBreed, DogSubBreed } from "~constants/constantsTypes";
import { RequestStatus } from "~constants/commonConstants";

export type DogsSlice = {
  allBreeds?: AllBreed;
  listBreedsStatus: `${RequestStatus}`;
};

export type GetAllBreedsResponse = {
  [k in DogBreed]: Array<DogSubBreed>;
};

export type AllBreed = GetAllBreedsResponse;
// The shape of the response happens to be convenient for storage in Redux,
// so I have chosen to simply reuse it
