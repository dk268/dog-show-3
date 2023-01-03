import {
  BreedWithSubBreed,
  DogBreed,
  DogSubBreed,
  SubBreedOfBreed,
} from "~constants/constantsTypes";
import { RequestStatus } from "~constants/commonConstants";
import { DogSelection } from "~utils/utils";

export type DogsSlice = {
  allBreeds?: AllBreed;
  dogSelections: DogSelection[];
  listBreedsStatus: `${RequestStatus}`;
  getPicsStatus: `${RequestStatus}`;
  picUrls: string[];
};

export type GetAllBreedsResponse = {
  [k in DogBreed]: Array<DogSubBreed>;
};

export type AllBreed = GetAllBreedsResponse;
// The shape of the response happens to be convenient for storage in Redux,
// so I have chosen to simply reuse it

export type DogRowMeta = {
  breed: DogBreed | "";
  subBreed: SubBreedOfBreed | "";
  count: number;
  id: number;
};

export type ValidDogSelection = {
  breed: DogBreed | BreedWithSubBreed;
  subBreed: DogSubBreed | "";
  count: number;
};

export type FetchPicsResponse = {
  message: string[];
  status: string;
};
