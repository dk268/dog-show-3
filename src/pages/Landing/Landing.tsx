import React, { FunctionComponent, useEffect } from "react";
import { RequestStatus } from "~constants/commonConstants";
import { useAppDispatch, useAppSelector } from "~hooks/hooks";
import { getAllBreeds, selectAllBreeds, selectListBreedsStatus } from "~stores/dogs";

export const Landing: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const allBreeds = useAppSelector(selectAllBreeds);
  const listBreedsStatus = useAppSelector(selectListBreedsStatus);

  useEffect(() => {
    if (listBreedsStatus === RequestStatus.Idle) {
      dispatch(getAllBreeds());
    }
  }, [dispatch, listBreedsStatus]);

  return <div>{JSON.stringify(allBreeds)}</div>;
};
