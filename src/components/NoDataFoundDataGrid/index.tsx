import { Typography } from "@mui/material";

interface NoDataFoundDataGridProps {
  widthImage?: string | number;
  heightImage?: string | number;
  textMarginTop?: string | number;
  fontSizetext?: string | number;
  message?: string;
}

export const NoDataFoundDataGrid = ({
  widthImage,
  heightImage,
  textMarginTop,
  fontSizetext,
  message,
}: NoDataFoundDataGridProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img
        src={"/assets/response/no-data.png"}
        alt="no-data"
        style={{ width: widthImage ?? 260, height: heightImage ?? 230 }}
      />
      <Typography
        variant="h6"
        sx={{ mt: textMarginTop ?? 0, fontSize: fontSizetext ?? 20 }}
      >
        {message ?? "No se encontraron datos."}
      </Typography>
    </div>
  );
};
