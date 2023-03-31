import { Link } from "react-router-dom";
import { BesideCard, SetPasswordForm, Logo } from "../../components";
import { ArrowLeftIcon } from "../../components/icons";
import "./SetPassword.css";

export const SetPassword = () => {
  return (
    <div className="set_password_wrapper">
      <div className="set_password_container">
        <BesideCard />
        <div className="set_password_form_wrapper">
          <div className="set_password_header">
            <div className="set_password_logo_title">
              <div className="set_password_logo">
                <Logo />
              </div>
              <p>NUEVA CONTRASEÑA</p>
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

          <SetPasswordForm />
        </div>
      </div>
    </div>
  );
};
