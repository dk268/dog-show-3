import React, { FunctionComponent, ReactElement, ReactNode } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "~stores/configureStore";

const theme = createTheme({});

const Providers: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const providedRender = (ui: ReactElement, options = {}): RenderResult<any> => {
  return render(ui, { wrapper: Providers, ...options });
};
