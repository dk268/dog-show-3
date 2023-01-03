import { FunctionComponent } from "react";
import { Box, SxProps } from "@mui/material";

export const withBorder = (): ((WrappedComponent: FunctionComponent) => FunctionComponent) => {
  const boxSx: SxProps = {
    border: "1px solid white",
    p: 2,
  };

  return (WrappedComponent: FunctionComponent) => () =>
    <Box sx={boxSx}>{<WrappedComponent />}</Box>;
};

// TODO: make hoc do something useful?
