import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schemas/loginSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { userLogin } from "../../services";
import { useNavigate, Link } from "react-router-dom";
import { MessageModal } from "../../components/modal";
import { LOGIN_CLEAN_ERRORS, LOGIN_REQUEST } from "../../store/actionTypes";
import "./Form.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { store, dispatch } = useStore();
  const { theme, login } = store;
  const { error } = login;
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
    dispatch({ type: LOGIN_REQUEST });
    userLogin(dispatch, form);
    setTimeout(() => {
      return dispatch({ type: LOGIN_CLEAN_ERRORS });
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
        <Link
          to="/forgot-pwd"
          style={{ textDecoration: "none", color: "#2b2b2b" }}
        >
          <div className="form_forgot_password">¿Olvidaste tu contraseña?</div>
        </Link>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: border, border: "none", color: bgColor }}
        />
        {error ? <MessageModal error={error} /> : null}
      </form>
      <Link to="/register" style={{ textDecoration: "none", color: "#2b2b2b" }}>
        <button
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: `1px solid ${border}`,
            color: border,
          }}
          className="form_register_btn"
        >
          Registrarse
        </button>
      </Link>
    </>
  );
};
