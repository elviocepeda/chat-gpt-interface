import { BesideCard, LoginForm, Logo } from "../../components";
import "./Login.css";

export const Login = () => {

  return (
    <div className="login_wrapper">
      <div className="login_container">
        <BesideCard />
        <div className="login_form_wrapper">
          <div className="login_logo">
            <Logo />
            <p>INICIAR SESION</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
