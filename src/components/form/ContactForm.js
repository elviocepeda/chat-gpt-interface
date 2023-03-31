import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./schemas/contactSchema";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import { sendContactMessage } from "../../services";
import { MessageModal } from "../modal";
import {
  CONTACT_ME_CLEAN_ERROR,
  CONTACT_ME_REQUEST,
} from "../../store/actionTypes";
import "./Form.css";

export const ContactForm = () => {
  const { store, dispatch } = useStore();
  const {
    theme,
    contactMe,
    login: { uuid },
    users,
  } = store;
  const { success, error } = contactMe;
  const { bgColor, border } = getColors(theme);
  const user = users?.list?.filter((user) => user.uuid === uuid);
  const username = user[0]?.username;
  const email = user[0]?.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  useEffect(() => {
    setValue("username", username);
    setValue("email", email);
  }, [setValue, username, email]);

  const onSubmit = (form) => {
    dispatch({ type: CONTACT_ME_REQUEST });
    sendContactMessage(dispatch, form);
    setTimeout(() => {
      return dispatch({ type: CONTACT_ME_CLEAN_ERROR });
    }, 4000);
    setValue("message", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div style={{ marginBottom: ".5rem" }}>
          <input
            {...register("username")}
            placeholder="Nombre completo"
            disabled
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: "#2b2b2b",
            }}
          />
          <p className="form_errors">{errors.username?.message}</p>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <input
            {...register("email")}
            placeholder="Email"
            disabled
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: "#2b2b2b",
            }}
          />
          <p className="form_errors">{errors.email?.message}</p>
        </div>
        <div style={{ marginBottom: ".5rem" }}>
          <textarea
            {...register("message")}
            placeholder="Escribí un mensaje"
            style={{
              border: theme ? "" : "1px solid #2b2b2b",
              color: border,
            }}
          />
          <p className="form_errors">{errors.message?.message}</p>
        </div>
        <input
          type="submit"
          value="Enviar"
          style={{ backgroundColor: border, border: "none", color: bgColor }}
        />
        {success ? <MessageModal success={success} /> : null}
        {error ? <MessageModal error={error} /> : null}
      </form>
    </>
  );
};
