import { getColors } from "../../common/constants";
import { useStore } from "../../store";

export const Warning = () => {
  const { store } = useStore();
  const { theme } = store;
  const { warning } = getColors(theme);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H26C26.5304 5 27.0391 5.21071 27.4142 5.58579C27.7893 5.96086 28 6.46957 28 7V14.3375C28 25.5235 18.5029 29.2256 16.6406 29.8447C16.2264 29.9931 15.7736 29.9931 15.3594 29.8447C13.4971 29.2256 4 25.5235 4 14.3375V7C4 6.46957 4.21071 5.96086 4.58579 5.58579ZM26 7L6 7L6 14.3375C6 24.1201 14.2747 27.3787 16 27.9501C17.7253 27.3787 26 24.1201 26 14.3375V7Z"
          fill={warning}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 11C16.5523 11 17 11.4477 17 12V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V12C15 11.4477 15.4477 11 16 11Z"
          fill={warning}
        />
        <path
          d="M16 23C16.8284 23 17.5 22.3284 17.5 21.5C17.5 20.6716 16.8284 20 16 20C15.1716 20 14.5 20.6716 14.5 21.5C14.5 22.3284 15.1716 23 16 23Z"
          fill={warning}
        />
      </svg>
    </div>
  );
};
