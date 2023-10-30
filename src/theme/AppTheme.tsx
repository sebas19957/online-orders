import { ReactElement } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { Theme } from "./Theme";

export const AppTheme = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
