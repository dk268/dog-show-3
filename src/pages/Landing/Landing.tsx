import { FunctionComponent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/";
import { RequestStatus } from "~constants/commonConstants";
import { useAppDispatch, useAppSelector } from "~hooks/hooks";
import { DogForm } from "~modules/DogForm";
import {
  getAllBreeds,
  selectListBreedsStatus,
  selectDogSelections,
  getRequestedPics,
  ValidDogSelection,
} from "~stores/dogs";

export const Landing: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const [inError, setInError] = useState(false);

  const dogSelections = useAppSelector(selectDogSelections);

  const listBreedsStatus = useAppSelector(selectListBreedsStatus);

  useEffect(() => {
    if (listBreedsStatus === RequestStatus.Idle) {
      dispatch(getAllBreeds());
    }
  }, [dispatch, listBreedsStatus]);

  useEffect(() => {
    setInError(false);
  }, [dogSelections]);
  /*
    N.B. I typically do not use non-primitives as dependencies.
    However, here, I do want the error state to clear on any change to the selections.
  */

  const handleClick = () => {
    console.log(dogSelections);
    const validRows = dogSelections.filter(({ breed, count }) => {
      return breed || count;
    }) as ValidDogSelection[];

    if (!validRows.length) {
      setInError(true);
      return;
      // TODO: enhance error handling to identify which rows are in error
    }

    dispatch(getRequestedPics(validRows));
  };

  const pl4: SxProps = { pl: 4 };

  const errorElement = inError ? (
    <Typography variant="caption" color="red">
      Please make at least one valid doggy request!
    </Typography>
  ) : null;

  return (
    <Container>
      <DogForm />
      <Box sx={pl4}>
        <Button onClick={handleClick} variant="contained">
          Fetch
        </Button>
        {errorElement}
      </Box>
    </Container>
  );
};
