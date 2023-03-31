import { useNavigate } from "react-router-dom";
import "./AvatarMenu.css";

export const AvatarMenu = ({ logout, closeModal }) => {
  const navigate = useNavigate();
  return (
    <div className="menu_avatar_wrapper">
      <div className="menu_avatar_container">
        <p
          onClick={() => {
            closeModal(false);
            navigate("/profile");
          }}
        >
          Perfil
        </p>
        <p onClick={logout}>Cerrar sesión</p>
      </div>
    </div>
  );
};
