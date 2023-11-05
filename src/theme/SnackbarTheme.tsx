import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "styled-components";

import success from "./toats/success.png";
import error from "./toats/error.png";
import warning from "./toats/warning.png";
import info from "./toats/info.png";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent": {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  },
}));

const StyledIamgenIconContent = styled("div")(({ color }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "15px",
  marginRight: "12px",
  backgroundColor: color,
}));

const imageIcon = (messageType: "success" | "error" | "info" | "warning") => {
  switch (messageType) {
    case "success":
      return (
        <StyledIamgenIconContent color="#DBF6E5">
          <img src={success} alt="ere" width={20} />
        </StyledIamgenIconContent>
      );
    case "error":
      return (
        <StyledIamgenIconContent color="#FFE4DE">
          <img src={error} alt="ere" width={20} />
        </StyledIamgenIconContent>
      );
    case "info":
      return (
        <StyledIamgenIconContent color="#D6F4F9">
          <img src={info} alt="ere" width={20} />
        </StyledIamgenIconContent>
      );
    case "warning":
      return (
        <StyledIamgenIconContent color="#FFF1D6">
          <img src={warning} alt="ere" width={20} />
        </StyledIamgenIconContent>
      );
    default:
      break;
  }

  return <img src={error} alt="ere" width={20} />;
};

interface SnackbarThemeProps {
  children?: React.ReactNode | React.ReactNode[];
}

const SnackbarTheme = ({ children }: SnackbarThemeProps) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
      iconVariant={{
        success: imageIcon("success"),
        error: imageIcon("error"),
        info: imageIcon("info"),
        warning: imageIcon("warning"),
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarTheme;
