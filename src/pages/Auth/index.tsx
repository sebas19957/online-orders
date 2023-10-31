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
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import LoginValidation from "../../utils/validations/LoginValidation";

import useStyles from "./styles";
import styles from "./authPage.module.css";

const AuthPage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [viewPass, setViewPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);

      enqueueSnackbar("Iniciaste sesión", {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        variant: "success",
      });

      navigate("/app/dashboard");
    },
  });

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
                  name="email"
                  variant="outlined"
                  label="Correo Electrónico"
                  fullWidth
                  className={classes.textField}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={!!formik.errors.email}
                  helperText={formik.errors.email}
                />
              </Grid>
              <Grid item container>
                <TextField
                  name="password"
                  variant="outlined"
                  label="Contraseña"
                  type={viewPass ? "text" : "password"}
                  fullWidth
                  className={classes.textField}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={!!formik.errors.password}
                  helperText={formik.errors.password}
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
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={formik.submitForm}
                >
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
