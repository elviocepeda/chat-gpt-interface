import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setPasswordSchema } from "./schemas/setPasswordSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { setPassword } from "../../services";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MessageModal } from "../modal";
import {
  SET_PASSWORD_CLEAN_ERROR,
  SET_PASSWORD_REQUEST,
} from "../../store/actionTypes";
import "./Form.css";

export const SetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm({
    resolver: yupResolver(setPasswordSchema),
  });
  const { store, dispatch } = useStore();
  const { theme, setPwd } = store;
  const { error, success } = setPwd;
  const { bgColor, border } = getColors(theme);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams);
  const { uuid, token } = query;
  const local = localStorage.getItem("jwt");

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/home");
    }
  }, [local]);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit = (form) => {
    const data = { ...form, uuid, token };
    dispatch({ type: SET_PASSWORD_REQUEST });
    setPassword(dispatch, data);
    setTimeout(() => {
      return dispatch({ type: SET_PASSWORD_CLEAN_ERROR });
    }, 4000);
    setValue("newPassword", "");
    setValue("confirm", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form_input_container">
          <label htmlFor="newPassword">Nueva contraseña:</label>
          <input
            {...register("newPassword")}
            placeholder="Nueva contraseña"
            id="newPassword"
            style={{
              color: border,
            }}
          />
          <p className="form_errors">{errors.newPassword?.message}</p>
        </div>
        <div className="form_input_container">
          <label htmlFor="confirm">Confirmar contraseña:</label>
          <input
            {...register("confirm")}
            placeholder="Confirmar contraseña"
            id="confirm"
            style={{
              color: border,
            }}
          />
          <p className="form_errors">{errors.confirm?.message}</p>
        </div>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: border, border: "none", color: bgColor }}
        />
        {success ? <MessageModal success={success} /> : null}
        {error ? <MessageModal error={error} /> : null}
      </form>
    </>
  );
};
