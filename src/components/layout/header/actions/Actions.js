import { ToggleIcon } from "../../../icons";
import { useStore } from "../../../../store";
import { LOGOUT_REQUEST, SET_THEME } from "../../../../store/actionTypes";
import { Avatar, AvatarMenu } from "../../../../components";
import { useState } from "react";
import "./Actions.css";

export const Actions = () => {
  const [openModal, setOpenModal] = useState(false);
  const { store, dispatch } = useStore();
  const { login } = store;

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT_REQUEST });
    dispatch({ type: SET_THEME, payload: false });
  };

  return (
    <div className="actions_wrapper">
      <div className="actions_theme">
        <ToggleIcon />
      </div>
      {login.uuid ? (
        <div onClick={() => setOpenModal(!openModal)}>
          <Avatar size="2rem" />
        </div>
      ) : null}
      {openModal ? (
        <AvatarMenu logout={handleLogout} closeModal={setOpenModal} />
      ) : null}
    </div>
  );
};
