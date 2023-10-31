import { makeStyles } from "@mui/styles";
import { Theme as theme } from "../../theme/Theme";

export default makeStyles(() => ({
  container: {
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    height: "100vh",
    backgroundColor: theme.palette.secondary.main,
  },
}));
