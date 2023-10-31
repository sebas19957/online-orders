import { Box, Button, Typography } from "@mui/material";

const BlockUserPage = () => {
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
        src="/assets/response/block.png"
        alt="not found"
        sx={{
          width: { xs: "300px", md: "450px" },
          height: { xs: "300px", md: "450px" },
        }}
      />
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Acceso denegado
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Tu dirección IP ha sido bloqueada debido a múltiples intentos fallidos.
      </Typography>
    </div>
  );
};

export default BlockUserPage;
