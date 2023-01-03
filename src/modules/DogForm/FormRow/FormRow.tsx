import { ChangeEventHandler, FunctionComponent, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "~hooks/hooks";
import {
  chooseDogBreed,
  chooseDogCount,
  chooseDogSubBreed,
  DogRowMeta,
  selectAllBreeds,
} from "~stores/dogs";
import { dogCapitalize, getSubBreedValueRender } from "~utils/utils";
import { DogBreed, SubBreedByBreed, BreedWithSubBreed } from "~constants/constantsTypes";
import { TailButton } from "./TailButton";

type SubBreedOfBreed = SubBreedByBreed[`${BreedWithSubBreed}`];

type FormRowProps = DogRowMeta & { isCoda: boolean };
export const FormRow: FunctionComponent<FormRowProps> = (props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isDesktop = theme.breakpoints.up("md");

  const { breed, subBreed, count, id, isCoda } = props;

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const count = Number(e.target.value);

    if (!isNaN(count) && count >= 0) {
      dispatch(chooseDogCount({ id, count }));
    }
  };

  const handleBreedChange = ({ target }: SelectChangeEvent<DogBreed>): void => {
    const breed = target.value as DogBreed;
    dispatch(chooseDogBreed({ id, breed }));
  };
  const handleSubBreedChange = ({ target }: SelectChangeEvent<SubBreedOfBreed>): void => {
    const subBreed = target.value as SubBreedOfBreed;
    dispatch(chooseDogSubBreed({ id, subBreed }));
  };

  const allBreeds = useAppSelector(selectAllBreeds);
  const subBreeds = useMemo(() => (breed && allBreeds ? allBreeds[breed] : []), [breed, allBreeds]);

  if (!allBreeds) return <Skeleton animation="wave" />;

  const breeds = Object.keys(allBreeds) as DogBreed[];

  const outerDirection = isDesktop ? "row" : "column";

  const renderSubBreed = getSubBreedValueRender.bind(null, breed);

  const goDogsGo = "Go Dogs Go";
  const subBreedSelect = (
    <Grid item xs={12} md={4}>
      <InputLabel>Select Sub-Breed</InputLabel>
      {breed && !subBreeds.length ? (
        <Select disabled value={goDogsGo} fullWidth>
          <MenuItem value={goDogsGo}>Breed has no sub-breeds</MenuItem>
        </Select>
      ) : (
        <Select
          disabled={!subBreeds.length}
          fullWidth
          label="Select Sub-Breed"
          onChange={handleSubBreedChange}
          renderValue={renderSubBreed}
          value={subBreed}
        >
          {subBreeds.map((subBreed) => {
            return (
              <MenuItem key={`subBreed${subBreed}${id}}`} value={subBreed}>
                {dogCapitalize(subBreed)}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </Grid>
  );

  return (
    <Grid container direction={outerDirection} spacing={2}>
      <Grid item xs={12} md={4}>
        <InputLabel>Select Breed</InputLabel>
        <Select value={breed} onChange={handleBreedChange} fullWidth>
          {breeds.map((breed) => {
            return (
              <MenuItem key={`breed${breed}${id}`} value={breed}>
                {dogCapitalize(breed)}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      {subBreedSelect}
      <Grid item>
        <InputLabel>Picture Count</InputLabel>
        <Box display="flex">
          <TextField value={count} onChange={handleCountChange} />
          <TailButton id={id} isCoda={isCoda} />
        </Box>
      </Grid>
    </Grid>
  );
};
