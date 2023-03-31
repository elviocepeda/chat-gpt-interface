import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "./schemas/forgotPasswordSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { forgotPassword } from "../../services";
import { useNavigate } from "react-router-dom";
import { MessageModal } from "../modal";
import {
  RECOVER_PASSWORD_REQUEST,
  RECOVER_PASSWORD_CLEAN_ERROR,
} from "../../store/actionTypes";
import "./Form.css";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const { store, dispatch } = useStore();
  const { theme, forgotPwd } = store;
  const { error, success } = forgotPwd;
  const { bgColor, border } = getColors(theme);
  const navigate = useNavigate();
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
    dispatch({ type: RECOVER_PASSWORD_REQUEST });
    forgotPassword(dispatch, form);
    setTimeout(() => {
      return dispatch({ type: RECOVER_PASSWORD_CLEAN_ERROR });
    }, 4000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="form_input_container">
          <label htmlFor="email">Email:</label>
          <input
            {...register("email")}
            placeholder="Email"
            id="email"
            style={{
              color: border,
            }}
          />
          <p className="form_errors">{errors.email?.message}</p>
        </div>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: border, border: "none", color: bgColor }}
        />
        {success ? <MessageModal success={success} button /> : null}
        {error ? <MessageModal error={error} button /> : null}
      </form>
    </>
  );
};
