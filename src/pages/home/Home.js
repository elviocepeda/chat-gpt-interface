import { Link } from "react-router-dom";
import { getColors } from "../../common/constants";
import { useStore } from "../../store";
import "./Home.css";

export const Home = () => {
  const { store } = useStore();
  const { theme } = store;
  const { border, bgColor } = getColors(theme);
  return (
    <div className="home_wrapper">
      <div className="home_left_container">
        <h2>CHAT GPT 3.5</h2>
      </div>
      <div className="home_right_container">
        <p
          className="home_chatgpt_description"
          style={{
            color: border,
            textShadow: theme ? "0 2px 2px #2b2b2b" : "",
          }}
        >
          ChatGPT es un prototipo de chatbot de inteligencia artificial
          desarrollado en 2022 por OpenAI que se especializa en el diálogo.
        </p>
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            color: "#2b2b2b",
          }}
          className="home_button_container"
        >
          <button
            className="home_button"
            style={{ color: bgColor, backgroundColor: border }}
          >
            Ir al chat
          </button>
        </Link>
        <p className="home_chatgpt_model" style={{ color: border }}>
          Modelo: <span>text-davinci-003</span>
        </p>
      </div>
    </div>
  );
};
