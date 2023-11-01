import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import CreateOrderValidation from "../../utils/validations/CreateOrderValidation";

import { createOrder } from "../../services/orders";

import useStyles from "./styles";

const DashboardPage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      product: "",
      price: "",
      quantity: "",
    },
    validationSchema: CreateOrderValidation,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await createOrder(
          values.product,
          Number(values.quantity),
          Number(values.price)
        );

        if (response?.ok) {
          enqueueSnackbar("Producto creado", {
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            variant: "error",
          });

          formik.resetForm();
        }
      } catch (error: any) {
        enqueueSnackbar(error?.message, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: "error",
        });
      }
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Paper className={classes.paperContainer}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
            marginBottom: "20px",
          }}
        >
          NUEVA ORDEN
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="product"
              variant="outlined"
              label="Producto o Servicio"
              fullWidth
              value={formik.values.product}
              onChange={formik.handleChange}
              error={!!formik.errors.product}
              helperText={formik.errors.product}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="price"
              type="number"
              variant="outlined"
              label="Precio"
              fullWidth
              value={formik.values.price}
              onChange={formik.handleChange}
              error={!!formik.errors.price}
              helperText={formik.errors.price}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="quantity"
              type="number"
              variant="outlined"
              label="Cantidad"
              fullWidth
              value={formik.values.quantity}
              onChange={formik.handleChange}
              error={!!formik.errors.quantity}
              helperText={formik.errors.quantity}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="flex-end">
            <Button
              variant="contained"
              className={classes.button}
              onClick={formik.submitForm}
            >
              Crear Orden
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardPage;
