import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required("Nombre obligatorio."),
  email: yup.string().email().required("Email obligatorio."),
  password: yup.string().required("Contraseña obligatoria."),
  confirm: yup
    .string()
    .required("Confirmar contraseña.")
    .oneOf([yup.ref("password"), null], "La contraseña no coincide."),
});
