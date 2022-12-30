import { BreedWithSubBreed, DogBreed, SubBreedByBreed } from "~constants/constantsTypes";

const BASE_URL = `https://dog.ceo/api`;

export const makeGetAllBreeds = () => `${BASE_URL}/breeds/list/all`;
// TODO: make better naming scheme for URL generators

export const makeGetNumberByBreed = (breed: DogBreed, count?: number) => {
  return `${BASE_URL}/breed/${breed}/images/random/${count ?? 1}`;
};

type MakeGetNumberBySubBreed = <T extends BreedWithSubBreed>(
  breed: T,
  subBreed: SubBreedByBreed[T],
  count?: number
) => string;

export const makeGetNumberBySubBreed: MakeGetNumberBySubBreed = (breed, subBreed, count) => {
  return `${BASE_URL}/breed/${breed}/${subBreed}/images/random/${count ?? 1}`;
};
