import * as yup from "yup";

export const loginFormSchema = yup.object({
  client_id: yup.string().required("El campo usuario es requerido"),
  client_secret: yup.string().required("El campo contraseña es requerido"),
});
