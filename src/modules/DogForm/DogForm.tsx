import { FunctionComponent } from "react";
import { useAppSelector } from "~hooks/hooks";
import { selectDogSelections } from "~stores/dogs";
import { FormRow } from "./FormRow";
import Grid from "@mui/material/Grid";

export const DogForm: FunctionComponent = () => {
  const dogSelections = useAppSelector(selectDogSelections);

  return (
    <Grid container direction="column">
      {dogSelections.map((selection, idx, { length }) => {
        return (
          <Grid item key={idx + "dogFormRow"}>
            <FormRow {...selection} isCoda={idx + 1 === length} />
          </Grid>
        );
      })}
    </Grid>
  );
  // TODO: change "isCoda" to a variable name not referring to music jargon
};
