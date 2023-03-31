import { BesideCard, RegisterForm, Logo } from "../../components";
import { ArrowLeftIcon } from "../../components/icons";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  return (
    <div className="register_wrapper">
      <div className="register_container">
        <BesideCard />
        <div className="register_form_wrapper">
          <div className="register_header">
            <div className="register_logo_title">
              <div className="register_logo">
                <Logo />
              </div>
              <p>REGISTRO</p>
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
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
