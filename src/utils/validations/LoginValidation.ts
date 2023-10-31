import * as yup from "yup";

export default yup.object({
  email: yup
    .string()
    .email("Ingresa un correo válido.")
    .required("Este campo es obligatorio."),
  password: yup.string().required("Este campo es obligatorio."),
});
