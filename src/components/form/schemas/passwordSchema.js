import * as yup from "yup";

export const passwordSchema = yup.object({
  password: yup.string().required("Contraseña actual obligatoria."),
  newPassword: yup.string().required("Contraseña nueva obligatoria."),
  confirm: yup
    .string()
    .required("Confirmar contraseña.")
    .oneOf([yup.ref("newPassword"), null], "La contraseña no coincide."),
});
