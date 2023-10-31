import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

import styles from "./auth.module.css";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

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
}));

const AuthLayout = () => {
  return (
    <div className={styles.container}>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AuthLayout;
