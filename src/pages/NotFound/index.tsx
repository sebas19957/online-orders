import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        padding: "30px",
      }}
    >
      <Box
        component="img"
        src="/assets/response/not_found.png"
        alt="not found"
        sx={{
          width: { xs: "300px", md: "450px" },
          height: { xs: "300px", md: "450px" },
        }}
      />
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        ¡Oops!
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Parece que te has perdido en el camino.
      </Typography>
      <Button
        variant="contained"
        sx={{ color: "black", mt: 3 }}
        onClick={() => navigate("/app/dashboard")}
      >
        Volver al Inicio
      </Button>
    </div>
  );
};

export default NotFoundPage;
