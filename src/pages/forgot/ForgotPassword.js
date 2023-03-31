import { Link } from "react-router-dom";
import { BesideCard, ForgotPasswordForm, Logo } from "../../components";
import { ArrowLeftIcon } from "../../components/icons";
import "./ForgotPassword.css";

export const ForgotPassword = () => {
  return (
    <div className="forgot_wrapper">
      <div className="forgot_container">
        <BesideCard />
        <div className="forgot_form_wrapper">
          <div className="forgot_header">
            <div className="forgot_logo_title">
              <div className="forgot_logo">
                <Logo />
              </div>
              <p>RECUPERAR CONTRASEÑA</p>
            </div>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "flex-end",
                textDecoration: "none",
                color: "#2b2b2b",
              }}
            >
              <ArrowLeftIcon />
            </Link>
          </div>

          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};
