import { makeStyles } from "@mui/styles";
import { Theme as theme } from "../../theme/Theme";

export default makeStyles(() => ({
  paperContainer: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "75%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "85%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
    },
    height: "auto !important",
    borderRadius: "15px !important",
    boxShadow: "24px 17px 9px -5px rgba(0,0,0,0.1) !important",
    padding: "25px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  button: {
    color: "black !important",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  image: {
    width: "24px",
  },
}));
