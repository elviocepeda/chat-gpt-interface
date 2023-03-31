import { getColors } from "../../../common/constants";
import { useStore } from "../../../store";
import "./Footer.css";

export const Footer = () => {
  const { store } = useStore();
  const { theme } = store;
  const { bgTransparent, border } = getColors(theme);

  return (
    <div
      className="footer_wrapper"
      style={{
        backgroundColor: bgTransparent,
        borderTop: `1px solid ${border}`,
        boxShadow: "0 -3px 6px rgba(0, 0, 0, 0.2)",
        color: border,
      }}
    >
      Creado por&nbsp;
      <p>Elvio Cepeda</p>
    </div>
  );
};
