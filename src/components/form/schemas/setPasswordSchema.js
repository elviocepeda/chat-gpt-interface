import * as yup from "yup";

export const setPasswordSchema = yup.object({
  newPassword: yup.string().required("Contraseña nueva obligatoria."),
  confirm: yup
    .string()
    .required("Confirmar contraseña.")
    .oneOf([yup.ref("newPassword"), null], "La contraseña no coincide."),
});
