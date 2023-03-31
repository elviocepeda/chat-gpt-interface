import { useState } from "react";
import { Avatar, PasswordForm } from "../../components";
import { CameraIcon } from "../../components/icons";
import { ChangeAvatarModal } from "../../components/modal";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import "./Profile.css";

export const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const { store } = useStore();
  const { login, users, theme } = store;
  const { uuid } = login;
  const { bgTransparent, border, bgColor } = getColors(theme);

  const user = users?.list?.filter((user) => user.uuid === uuid);
  const username = user[0]?.username;
  const email = user[0]?.email;

  return (
    <>
      <div
        className="profile_wrapper"
        style={{
          backgroundColor: bgTransparent,
          border: `1px solid ${border}`,
        }}
      >
        <div className="profile_container">
          <div
            className={
              !showChangePassword
                ? "profile_avatar"
                : "profile_avatar_display_none"
            }
          >
            <Avatar size="6rem" />
            <div
              className="profile_camera_container"
              onClick={() => setOpenModal(!openModal)}
            >
              <CameraIcon />
            </div>
          </div>

          <div className="profile_info">
            <span style={{ color: border }}>{username}</span>
            <span style={{ color: border }}>{email}</span>
          </div>
          <button
            className="profile_password_btn"
            onClick={() => setShowChangePassword(!showChangePassword)}
            style={{
              color: bgColor,
              backgroundColor: border,
              border: theme ? "1px solid #2b2b2b" : "none",
            }}
          >
            {showChangePassword ? <>Volver</> : <>Cambiar contraseña</>}
          </button>
          {showChangePassword ? (
            <div className="profile_change_password">
              <PasswordForm />
            </div>
          ) : null}
        </div>
        <div className="profile_robot"></div>
      </div>
      {openModal && <ChangeAvatarModal closeModal={setOpenModal} />}
    </>
  );
};
