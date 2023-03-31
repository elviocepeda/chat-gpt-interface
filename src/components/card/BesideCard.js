import { Logo } from "../logo";
import { OpenAIIcon } from "../icons";
import "./BesideCard.css";

export const BesideCard = () => {
  return (
    <div className="beside_wrapper">
      <div className="beside_container">
        <div>
          <h2>CHAT</h2>
          <h2>GPT</h2>
          <h2>3</h2>
        </div>
        <div className="beside_logo">
          <Logo size="140" />
        </div>
        <div className="beside_openai">
          <h3>OpenAI</h3>
          <OpenAIIcon />
        </div>
      </div>
    </div>
  );
};
