import React, { ChangeEventHandler, FunctionComponent, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { useAppSelector } from "~hooks/hooks";
import { selectAllBreeds } from "~stores/dogs";
import { dogCapitalize, getSubBreedValueRender } from "~utils/utils";
import { DogBreed, SubBreedByBreed, BreedWithSubBreed } from "~constants/constantsTypes";

type SubBreedOfBreed = SubBreedByBreed[`${BreedWithSubBreed}`];

export const DogForm: FunctionComponent = () => {
  const theme = useTheme();
  const isDesktop = theme.breakpoints.up("md");

  const [count, setCount] = useState(1);
  const [breed, setBreed] = useState<DogBreed | "">("");
  const [subBreed, setSubBreed] = useState<SubBreedOfBreed | "">("");
  const handleCountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = Number(e.target.value);

    if (!isNaN(newVal) && newVal >= 0) {
      setCount(newVal);
    }
  };

  const handleBreedChange = ({ target }: SelectChangeEvent<DogBreed>): void => {
    const value = target.value as DogBreed;
    setBreed(value);
    setSubBreed("");
  };
  const handleSubBreedChange = ({ target }: SelectChangeEvent<SubBreedOfBreed>): void => {
    const value = target.value as SubBreedOfBreed;
    setSubBreed(value);
  };

  const allBreeds = useAppSelector(selectAllBreeds);
  const subBreeds = useMemo(() => (breed && allBreeds ? allBreeds[breed] : []), [breed, allBreeds]);

  if (!allBreeds) return <Skeleton animation="wave" />;

  const breeds = Object.keys(allBreeds) as DogBreed[];

  const outerDirection = isDesktop ? "row" : "column";

  const renderSubBreed = getSubBreedValueRender.bind(null, breed, subBreeds);

  return (
    <Grid container direction={outerDirection}>
      <Grid item xs={12} md={4}>
        <InputLabel>Select Breed</InputLabel>
        <Select value={breed} onChange={handleBreedChange} fullWidth>
          {breeds.map((breed) => {
            return (
              <MenuItem key={breed} value={breed}>
                {dogCapitalize(breed)}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={12} md={4}>
        <InputLabel>Select Sub-Breed</InputLabel>
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
              <MenuItem key={`${subBreed}subBreed`} value={subBreed}>
                {dogCapitalize(subBreed)}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item>
        <InputLabel>Picture Count</InputLabel>
        <TextField value={count} onChange={handleCountChange} />
      </Grid>
      <Grid item>{`${breed} ${subBreed} ${subBreeds}`}</Grid>
    </Grid>
  );
};
