import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getColors } from "../../common/constants";
import { getResponse } from "../../services";
import { useStore } from "../../store";
import { SET_PROMPT } from "../../store/actionTypes";
import defaultAvatar from "../../assets/user.jpg";
import "./Chat.css";

export const Chat = () => {
  const [userAvatar, setUserAvatar] = useState(null);
  const { register, handleSubmit, setFocus, resetField } = useForm();
  const { store, dispatch } = useStore();
  const { theme, chat, login, users } = store;
  const { list } = chat;
  const { border, bgTransparent } = getColors(theme);
  const { uuid } = login;

  const ref = useRef();
  const user = users?.list?.filter((user) => user.uuid === uuid);

  useEffect(() => {
    user[0]?.avatar !== ""
      ? setUserAvatar(user[0]?.avatar)
      : setUserAvatar(defaultAvatar);
  }, [user]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [list]);

  const onSubmit = (form) => {
    if (form.prompt.trim() !== "") {
      resetField("prompt");
      setFocus("prompt");
      const data = { avatar: userAvatar, form };
      dispatch({ type: SET_PROMPT, payload: data });
      getResponse(dispatch, form);
    }
    return;
  };

  return (
    <>
      <div className="chat_window_wrapper">
        <div ref={ref} className="chat_window_container">
          {list ? (
            list.map((item) => {
              return (
                <div key={item.id} className="chat_window_msg_container">
                  <div
                    style={{
                      backgroundImage: `url(${item.avatar})`,
                      backgroundSize: "cover",
                    }}
                    className="chat_window_msg_avatar"
                  ></div>
                  <div
                    className="chat_window_msg_message"
                    style={{
                      backgroundColor: bgTransparent,
                      border: `1px solid ${border}`,
                      color: border,
                    }}
                  >
                    {item.success}
                  </div>
                </div>
              );
            })
          ) : (
            <div>Inicia una conversación</div>
          )}
        </div>
      </div>
      <div
        className="prompt_container"
        style={{
          backgroundColor: bgTransparent,
          borderTop: `1px solid ${border}`,
        }}
      >
        <form className="prompt_form" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("prompt")}
            className="prompt_textarea"
            placeholder="Escribir mensaje"
            autoFocus
            onKeyPress={(e) => {
              if (e.key === "Enter" && e.shiftKey === false) {
                e.preventDefault();
                const data = { prompt: e.target.value };
                return handleSubmit(onSubmit(data));
              }
            }}
            style={{ border: `1px solid ${border}`, color: border }}
          />
          <div className="prompt_svg_container">
            <input className="prompt_input" type="submit" value="" />
            <svg width="2rem" height="2rem" viewBox="0 0 32 32">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.64161 2.18531C6.04591 2.14469 6.453 2.22818 6.80868 2.42468L6.81379 2.4275L27.9217 14.25L27.9244 14.2515C28.2358 14.4244 28.4954 14.6774 28.6764 14.9842C28.8578 15.292 28.9535 15.6427 28.9535 16C28.9535 16.3572 28.8578 16.708 28.6764 17.0157C28.4954 17.3226 28.2358 17.5756 27.9244 17.7485L27.9217 17.75L6.80869 29.5753C6.45301 29.7718 6.04591 29.8553 5.64161 29.8147C5.2373 29.774 4.85495 29.6112 4.54548 29.3479C4.236 29.0846 4.01408 28.7332 3.90925 28.3406C3.80455 27.9485 3.82162 27.5338 3.95818 27.1517L7.93379 16L3.95868 4.84968C3.82192 4.46735 3.8045 4.05166 3.90925 3.65933C4.01408 3.26675 4.236 2.9154 4.54548 2.65208C4.85496 2.38875 5.2373 2.22594 5.64161 2.18531ZM27.4376 15.125L26.9489 15.9975L5.84155 4.17529L5.84205 4.17668L9.8113 15.3106C9.98396 15.7539 9.98396 16.246 9.8113 16.6894L5.84155 27.8247L26.9489 16.0025L26.9535 16L27.4376 15.125Z"
                fill={border}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C8 15.4477 8.44772 15 9 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H9C8.44772 17 8 16.5523 8 16Z"
                fill={border}
              />
            </svg>
          </div>
        </form>
      </div>
    </>
  );
};
