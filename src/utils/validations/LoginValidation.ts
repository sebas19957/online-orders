import * as yup from "yup";

export default yup.object({
  email: yup.string().required("Este campo es obligatorio."),
  password: yup.string().required("Este campo es obligatorio."),
});
