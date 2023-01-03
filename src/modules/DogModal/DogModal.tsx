import { SxProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FunctionComponent, Suspense } from "react";
import { useAppSelector } from "~hooks/hooks";
import { selectPicUrls } from "~stores/dogs";

type DogModalProps = {
  open: boolean;
  onClose: () => void;
};
export const DogModal: FunctionComponent<DogModalProps> = ({ open, onClose }) => {
  const dogUrls = useAppSelector(selectPicUrls);

  const boxSx: SxProps = {
    height: "176px",
    width: "176px",
    overflow: "hidden",
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Suspense>
        <Grid container direction="row" wrap="wrap">
          {dogUrls.map((url) => {
            return <Box component="img" key={url} src={url} sx={boxSx} alt="dog-eat-dog" />;
          })}
        </Grid>
      </Suspense>
    </Dialog>
  );
};
