import { Outlet } from "react-router-dom";

import { styled } from "@mui/material/styles";

import Header from "./Header";

// import styles from "./general.module.css";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  height: "100vh",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  backgroundColor: theme.palette.secondary.main,
}));

// ----------------------------------------------------------------------

export default function GeneralLayout() {
  return (
    <StyledRoot>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
