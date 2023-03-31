import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas/registerSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { createUser } from "../../services";
import { MessageModal } from "../../components/modal";
import {
  CREATE_USER_CLEAN_ERROR,
  CREATE_USER_REQUEST,
} from "../../store/actionTypes";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const local = localStorage.getItem("jwt");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { store, dispatch } = useStore();
  const { theme, addUser } = store;
  const { success, error } = addUser;
  const { bgColor, border } = getColors(theme);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/home");
    }
  }, [local]);

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  const onSubmit = (form) => {
    dispatch({ type: CREATE_USER_REQUEST });
    createUser(dispatch, form);
    setTimeout(() => {
      return dispatch({ type: CREATE_USER_CLEAN_ERROR });
    }, 4000);
  };

  return (
    <form
      className="form_wrapper"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="form_input_container">
        <label htmlFor="username">Usuario:</label>
        <input
          {...register("username")}
          placeholder="Usuario"
          id="username"
          style={{
            color: border,
          }}
        />
        <p className="form_errors">{errors.username?.message}</p>
      </div>
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
      <div className="form_input_container">
        <label htmlFor="password">Contraseña:</label>
        <input
          {...register("password")}
          placeholder="Contraseña"
          type="password"
          id="password"
          style={{
            color: border,
          }}
        />
        <p className="form_errors">{errors.password?.message}</p>
      </div>
      <div className="form_input_container">
        <label htmlFor="password">Confirmar contraseña:</label>
        <input
          {...register("confirm")}
          placeholder="Confirmar contraseña"
          type="password"
          id="confirm"
          style={{
            color: border,
          }}
        />
        <p className="form_errors">{errors.confirm?.message}</p>
      </div>
      <input
        className="form_input_container"
        type="submit"
        value="Enviar"
        style={{
          backgroundColor: border,
          border: theme ? "" : "1px solid #2b2b2b",
          color: bgColor,
        }}
      />
      {success ? <MessageModal success={success} button /> : null}
      {error ? <MessageModal error={error} button /> : null}
    </form>
  );
};
