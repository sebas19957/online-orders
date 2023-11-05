import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "inherit",
    padding: 10,
    marginTop: "1px",
  },
  contentCard: {
    width: "100%",
    padding: "20px !important",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "250px",
  },
  dataGrid: {
    borderRadius: "15px !important",
    "& .MuiDataGrid-columnHeaderTitle": {
      whiteSpace: "break-spaces",
      lineHeight: "normal",
      fontWeight: "bold",
      fontSize: 14,
    },
  },
}));

export { useStyles as default };
