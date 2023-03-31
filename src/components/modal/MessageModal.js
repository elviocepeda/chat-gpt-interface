import { Link } from "react-router-dom";
import { getColors } from "../../common/constants";
import { useStore } from "../../store";
import { CheckIcon, WarningIcon } from "../icons";
import "./MessageModal.css";

export const MessageModal = ({
  success = null,
  error = null,
  button = null,
}) => {
  const { store } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);
  return (
    <div className="modal_msg_wrapper">
      <div className="modal_msg_container">
        {success && (
          <>
            <div className="modal_success_container">
              <p>{success}</p>
              <CheckIcon />
            </div>
            {button ? (
              <Link to="/" style={{ textDecoration: "none", color: "#2b2b2b" }}>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: `1px solid ${border}`,
                    color: border,
                  }}
                  className="modal_btn"
                >
                  Login
                </button>
              </Link>
            ) : null}
          </>
        )}
        {error && (
          <>
            <div className="modal_error_container">
              <p>{error}</p>
              <WarningIcon />
            </div>
            {button ? (
              <Link to="/" style={{ textDecoration: "none", color: "#2b2b2b" }}>
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: `1px solid ${border}`,
                    color: border,
                  }}
                  className="modal_btn"
                >
                  Login
                </button>
              </Link>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};
