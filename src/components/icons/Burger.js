import { getColors } from "../../common/constants";
import { useStore } from "../../store";

export const Burger = () => {
  const { store } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
          fill={border}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8C4 7.44772 4.44772 7 5 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H5C4.44772 9 4 8.55228 4 8Z"
          fill={border}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 24C4 23.4477 4.44772 23 5 23H27C27.5523 23 28 23.4477 28 24C28 24.5523 27.5523 25 27 25H5C4.44772 25 4 24.5523 4 24Z"
          fill={border}
        />
      </svg>
    </div>
  );
};