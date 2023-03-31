import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import { Footer } from "./footer";
import { Header } from "./header";
import { getColors } from "../../common/constants";
import "./Layout.css";

export const Layout = ({ children, withFooter }) => {
  const { store } = useStore();
  const { theme } = store;
  const { bgColor } = getColors(theme);
  const navigate = useNavigate();
  const local = localStorage.getItem("jwt");
  useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, [navigate, local]);

  return (
    <div className="layout_wrapper" style={{ backgroundColor: bgColor }}>
      <Header />
      <div className="layout_children">{children}</div>
      {withFooter ? <Footer /> : null}
    </div>
  );
};
