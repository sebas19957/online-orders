import * as yup from "yup";

export default yup.object({
  product: yup.string().required("Este campo es obligatorio."),
  price: yup.string().required("Este campo es obligatorio."),
  quantity: yup.string().required("Este campo es obligatorio."),
});
