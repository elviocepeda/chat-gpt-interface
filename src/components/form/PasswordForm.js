import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "./schemas/passwordSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { updateUserPassword } from "../../services";
import { MessageModal } from "../modal";
import {
  UPDATE_USER_PASSWORD_CLEAN_ERROR,
  UPDATE_USER_PASSWORD_REQUEST,
} from "../../store/actionTypes";
import "./Form.css";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const { store, dispatch } = useStore();
  const {
    theme,
    changePassword,
    login: { uuid },
  } = store;
  const { success, error } = changePassword;
  const { bgColor, border } = getColors(theme);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit = (form) => {
    dispatch({ type: UPDATE_USER_PASSWORD_REQUEST });
    updateUserPassword(dispatch, uuid, form);
    setTimeout(() => {
      return dispatch({ type: UPDATE_USER_PASSWORD_CLEAN_ERROR });
    }, 4000);
    setValue("password", "");
    setValue("newPassword", "");
    setValue("confirm", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div style={{ marginBottom: ".5rem" }}>
          <input
            {...register("password")}
            placeholder="Contraseña actual"
            type="password"
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: border,
            }}
          />
          <p className="form_errors">{errors.password?.message}</p>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <input
            {...register("newPassword")}
            placeholder="Contraseña nueva"
            type="password"
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: border,
            }}
          />
          <p className="form_errors">{errors.newPassword?.message}</p>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <input
            {...register("confirm")}
            placeholder="Contraseña nueva"
            type="password"
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: border,
            }}
          />
          <p className="form_errors">{errors.confirm?.message}</p>
        </div>
        <input
          type="submit"
          value="Guardar"
          style={{
            backgroundColor: border,
            border: theme ? "1px solid #2b2b2b" : "none",
            color: bgColor,
          }}
        />
        {success ? <MessageModal success={success} /> : null}
        {error ? <MessageModal error={error} /> : null}
      </form>
    </>
  );
};
