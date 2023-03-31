import { Link } from "react-router-dom";
import { getColors } from "../../../../common/constants";
import { useStore } from "../../../../store";
import "./Navbar.css";

export const Navbar = () => {
  const { store } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);
  const NAVBAR = [
    {
      text: "INICIO",
      path: "/home",
      style: { textDecoration: "none", color: border },
    },
    {
      text: "CHAT",
      path: "/chat",
      style: { textDecoration: "none", color: border },
    },
    {
      text: "CONTACTO",
      path: "/contact",
      style: { textDecoration: "none", color: border },
    },
  ];

  return (
    <nav className="navbar_wrapper">
      <ul>
        {NAVBAR.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} style={item.style}>
                <span>{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
