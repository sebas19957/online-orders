import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Create a theme instance.
export const Theme = createTheme({
  palette: {
    primary: {
      main: "#5EF38C",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#F4F6F8",
    },
  },
  typography: {
    fontFamily: "Lilita One, sans-serif",
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          outline: "none",
          fontWeight: "bold",
          fontFamily: "Raleway",
          "&.raleway": {
            fontWeight: "bold",
          },
          "&.bold": {
            fontWeight: "bold",
          },
          "&.view": {
            color: "#FFF",
            background: grey[600],
            borderRadius: 50,
            padding: "1.6px 0",
            "&:hover": {
              background: grey[700],
              color: "#FFF",
            },
          },
        },
        outlined: {
          borderWidth: 2,
          borderRadius: 50,
        },
        outlinedPrimary: {
          borderWidth: 2,
          padding: "8px 20px",
          "&:hover": {
            color: "#5EF38C",
            borderWidth: 2,
          },
        },
        contained: {
          boxShadow: "none",
          borderRadius: 50,
        },
        containedPrimary: {
          "&:hover": {
            color: "#FFF",
          },
        },
        containedSecondary: {
          padding: "8px 20px",
          "&:hover": {
            color: "#FFF",
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          "&  input[type=number]": {
            "&::-webkit-inner-spin-button": {
              display: "none !important",
            },
          },
          "& 	.MuiFormControl-marginDense": {
            overflow: "hidden",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          "&  input[type=number]": {
            "&::-webkit-inner-spin-button": {
              display: "none !important",
            },
          },
          "& .MuiFormControl-marginDense": {
            overflow: "hidden",
          },
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          "&.table-agent, &.table-present": {
            "&:not(.table-present) .MuiTableRow-root:nth-child(odd)": {
              background: "rgba(0, 0, 0, 0.02)",
            },
            "& .MuiTableCell-root": {
              fontSize: 14,
              borderBottom: "none",
              color: "#AFAFAF",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 10,
        },
        body: {
          color: "#767676",
        },
        head: {
          color: "#AFAFAF",
          fontWeight: "bold",
          fontSize: 14,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: "#5EF38C",
        },
        colorDefault: {
          backgroundColor: "#5EF38C",
        },
      },
    },
  },
});
