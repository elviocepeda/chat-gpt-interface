import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { avatarSchema } from "./schemas/avatarSchema";
import { UploadIcon } from "../icons";
import { useStore } from "../../store";
import { uploadImage } from "../../services";
import { getColors } from "../../common/constants";
import { MessageModal } from "../modal";
import {
  SET_AVATAR_CLEAN_ERROR,
  SET_AVATAR_REQUEST,
} from "../../store/actionTypes";
import "./AvatarForm.css";
import "./Form.css";

export const AvatarForm = ({ setPreview, closeModal }) => {
  const { store, dispatch } = useStore();
  const { login, theme, setAvatar } = store;
  const { uuid } = login;
  const { error, success } = setAvatar;
  const { border, bgColor } = getColors(theme);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(avatarSchema),
  });

  const onSubmit = (form) => {
    const formData = new FormData();
    formData.append("avatar", form.file[0]);
    dispatch({ type: SET_AVATAR_REQUEST });
    uploadImage(dispatch, uuid, formData);
    setTimeout(() => {
      return dispatch({ type: SET_AVATAR_CLEAN_ERROR });
    }, 4000);
    closeModal(false);
    window.location.reload();
  };

  return (
    <div className="form_avatar_wrapper">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form_avatar_container">
          <label htmlFor="file" style={{ color: border }}>
            Elegir imagen:
          </label>
          <div
            className="form_input_file_container"
            style={{ border: `4px dashed ${border}` }}
          >
            <input
              {...register("file")}
              id="file"
              type="file"
              onChange={setPreview}
            />
            <div className="form_upload_icon_container">
              <UploadIcon />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Guardar"
          style={{ backgroundColor: border, color: bgColor }}
        />
        {success ? <MessageModal success={success} /> : null}
        {error ? <MessageModal error={error} /> : null}
      </form>
      <p className="form_errors">{errors.file?.message}</p>
    </div>
  );
};
