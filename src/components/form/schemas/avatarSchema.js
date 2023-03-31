import * as yup from "yup";

export const avatarSchema = yup.object({
  file: yup
    .mixed()
    .required("Elegí una imagen.")
    .test("fileSize", "La imagen no puede exceder los 5mb.", (value) => {
      return value[0].size <= 5242880;
    })
    .test("fileType", "Elegí un formato válido (jpg, jpeg, png).", (value) => {
      const types = ["image/jpeg", "image/png", "image/jpg"];
      return types.includes(value[0].type);
    }),
});
