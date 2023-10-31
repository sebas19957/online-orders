import { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

import styles from "./authPage.module.css";

const AuthPage = () => {
  const classes = useStyles();
  const [viewPass, setViewPass] = useState(false);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 350px)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
            sx={{ marginBottom: "15px" }}
          >
            <img
              src="/assets/images/logo.png"
              alt="logo"
              style={{ width: "40px", height: "40px" }}
              className={styles.pulse}
            />
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              ONLINE ORDERS
            </Typography>
          </Stack>
          <Paper className={classes.paperContainer}>
            <Grid container spacing={2}>
              <Grid
                item
                container
                justifyContent="center"
                alignContent="center"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{
                    xs: 0.5,
                    sm: 1,
                  }}
                  className=""
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Iniciar Sesión
                  </Typography>
                </Stack>
              </Grid>
              <Grid item container>
                <TextField
                  variant="outlined"
                  label="Correo"
                  fullWidth
                  className={classes.textField}
                />
              </Grid>
              <Grid item container>
                <TextField
                  variant="outlined"
                  label="Contraseña"
                  type={viewPass ? "text" : "password"}
                  fullWidth
                  className={classes.textField}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setViewPass(!viewPass)}
                        >
                          {!viewPass ? (
                            <img
                              src="/assets/icons/eye-closed-white.png"
                              alt="eye_closed_icon"
                              className={classes.image}
                            />
                          ) : (
                            <img
                              src="/assets/icons/eye-white.png"
                              alt="eye_closed_icon"
                              className={classes.image}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    onFocus: (event) => {
                      event.target.setAttribute("autocomplete", "off");
                    },
                  }}
                />
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Button variant="contained" className={classes.button}>
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AuthPage;
