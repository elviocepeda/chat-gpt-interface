import { getColors } from "../../common/constants";
import { useStore } from "../../store";

export const Check = () => {
  const { store } = useStore();
  const { theme } = store;
  const { success } = getColors(theme);

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
          fill={success}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.2236 12.3097C22.6048 12.7093 22.5899 13.3423 22.1903 13.7236L14.8528 20.7236C14.4662 21.0924 13.8579 21.0921 13.4716 20.723L9.80912 17.223C9.40983 16.8414 9.39547 16.2084 9.77704 15.8091C10.1586 15.4098 10.7916 15.3955 11.1909 15.777L14.1631 18.6174L20.8097 12.2765C21.2093 11.8952 21.8423 11.9101 22.2236 12.3097Z"
          fill={success}
        />
      </svg>
    </div>
  );
};
