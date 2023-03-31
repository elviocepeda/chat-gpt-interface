import { ContactForm } from "../../components";
import { useStore } from "../../store";
import { getColors } from "../../common/constants";
import "./Contact.css";

export const Contact = () => {
  const { store } = useStore();
  const { theme } = store;
  const { bgTransparent, border } = getColors(theme);

  return (
    <>
      <div
        className="contact_wrapper"
        style={{
          backgroundColor: bgTransparent,
          border: `1px solid ${border}`,
        }}
      >
        <div className="contact_container">
          <div className="contact_form_container">
            <p className="contact_form_title" style={{ color: border }}>
              ¡Dejá tu mensaje!
            </p>
            <ContactForm />
          </div>
        </div>
        <div className="contact_robot"></div>
      </div>
    </>
  );
};
