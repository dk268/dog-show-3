import React, { FunctionComponent, useEffect } from "react";
import { RequestStatus } from "~constants/commonConstants";
import { useAppDispatch, useAppSelector } from "~hooks/hooks";
import { DogForm } from "~modules/DogForm";
import { getAllBreeds, selectListBreedsStatus } from "~stores/dogs";

export const Landing: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const listBreedsStatus = useAppSelector(selectListBreedsStatus);

  useEffect(() => {
    if (listBreedsStatus === RequestStatus.Idle) {
      dispatch(getAllBreeds());
    }
  }, [dispatch, listBreedsStatus]);

  return <DogForm />;
};
