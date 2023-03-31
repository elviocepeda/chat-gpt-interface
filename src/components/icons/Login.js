import { getColors } from "../../common/constants";
import { useStore } from "../../store";

export const Login = ({ handleLogin }) => {
  const { store } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);

  return (
    <div className="svg_wrapper" onClick={handleLogin}>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 16C15.1716 16 14.5 16.6716 14.5 17.5C14.5 18.3284 15.1716 19 16 19C16.8284 19 17.5 18.3284 17.5 17.5C17.5 16.6716 16.8284 16 16 16ZM12.5 17.5C12.5 15.567 14.067 14 16 14C17.933 14 19.5 15.567 19.5 17.5C19.5 19.433 17.933 21 16 21C14.067 21 12.5 19.433 12.5 17.5Z"
          fill={border}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 19C16.5523 19 17 19.4477 17 20V23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23V20C15 19.4477 15.4477 19 16 19Z"
          fill={border}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 12C4 10.8954 4.89543 10 6 10H26C27.1046 10 28 10.8954 28 12V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V12ZM26 12H6V26H26V12Z"
          fill={border}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3C15.0717 3 14.1815 3.36875 13.5251 4.02513C12.8687 4.6815 12.5 5.57174 12.5 6.5V11C12.5 11.5523 12.0523 12 11.5 12C10.9477 12 10.5 11.5523 10.5 11V6.5C10.5 5.04131 11.0795 3.64236 12.1109 2.61091C13.1424 1.57946 14.5413 1 16 1C17.4587 1 18.8576 1.57946 19.8891 2.61091C20.9205 3.64236 21.5 5.04131 21.5 6.5C21.5 7.05228 21.0523 7.5 20.5 7.5C19.9477 7.5 19.5 7.05228 19.5 6.5C19.5 5.57174 19.1313 4.6815 18.4749 4.02513C17.8185 3.36875 16.9283 3 16 3Z"
          fill={border}
        />
      </svg>
    </div>
  );
};