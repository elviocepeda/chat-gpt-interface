import { useState } from "react";
import { Link } from "react-router-dom";
import { getColors } from "../../../../common/constants";
import { useStore } from "../../../../store";
import { BurgerIcon, CloseIcon } from "../../../icons";
import "./Burger.css";

export const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { store } = useStore();
  const { theme } = store;
  const { border, bgColor } = getColors(theme);
  const NAVBAR = [
    {
      text: "INICIO",
      path: "/home",
      style: { textDecoration: "none", color: bgColor, width: "100%" },
    },
    {
      text: "CHAT",
      path: "/chat",
      style: { textDecoration: "none", color: bgColor, width: "100%" },
    },
    {
      text: "CONTACTO",
      path: "/contact",
      style: { textDecoration: "none", color: bgColor, width: "100%" },
    },
  ];

  return (
    <div className="burger_wrapper">
      <div onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <CloseIcon /> : <BurgerIcon />}
      </div>
      {showMenu ? (
        <nav
          className="burger_nav_container"
          style={{
            backgroundColor: border,
          }}
        >
          <ul>
            {NAVBAR.map((item, index) => {
              return (
                <Link to={item.path} style={item.style} key={index}>
                  <li
                    style={{
                      borderBottom: `1px solid ${bgColor}`,
                    }}
                  >
                    <span>{item.text}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
