import { Burger, Navbar, Actions } from "./index";
import { Logo } from "../../logo";
import { useStore } from "../../../store";
import { getColors } from "../../../common/constants";
import "./Header.css";

export const Header = () => {
  const { store } = useStore();
  const { theme } = store;
  const { bgTransparent, border } = getColors(theme);

  return (
    <div
      className="header_wrapper"
      style={{
        backgroundColor: bgTransparent,
        borderBottom: `1px solid ${border}`,
        boxShadow: "0 -3px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Burger />
      <Navbar />
      <Logo />
      <Actions />
    </div>
  );
};
