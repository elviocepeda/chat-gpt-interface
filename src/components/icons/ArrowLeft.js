import { getColors } from "../../common/constants";
import { useStore } from "../../store";

export const ArrowLeft = () => {
  const { store } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        cursor: "pointer",
        marginLeft: " 1rem",
        marginBottom: ".3rem",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 32 32">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
          fill={border}
        />
      </svg>
    </div>
  );
};