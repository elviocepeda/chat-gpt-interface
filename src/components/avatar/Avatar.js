import { useEffect, useState } from "react";
import { useStore } from "../../store";
import defaultAvatar from "../../assets/user.jpg";
import "./Avatar.css";

export const Avatar = ({ size }) => {
  const [userAvatar, setUserAvatar] = useState(null);
  const { store } = useStore();
  const { login, users } = store;
  const { uuid } = login;
  const user = users?.list?.filter((user) => user.uuid === uuid);

  useEffect(() => {
    user && user[0]?.avatar
      ? setUserAvatar(user[0]?.avatar)
      : setUserAvatar(defaultAvatar);
  }, [user]);

  return (
    <div className="avatar_wrapper" style={{ width: size, height: size }}>
      <div
        style={{
          backgroundImage: `url(${userAvatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          borderRadius: "50%",
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
};
