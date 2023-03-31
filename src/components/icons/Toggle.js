import { getColors } from "../../common/constants";
import { useStore } from "../../store";
import { SET_THEME } from "../../store/actionTypes";

export const Toggle = () => {
  const { store, dispatch } = useStore();
  const { theme } = store;
  const { border } = getColors(theme);

  return (
    <div
      className="svg_wrapper"
      onClick={() => dispatch({ type: SET_THEME, payload: !theme })}
    >
      {theme ? (
        <svg width="30" height="18" viewBox="0 0 30 18">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16H21C24.866 16 28 12.866 28 9C28 5.13401 24.866 2 21 2H9ZM0 9C0 4.02944 4.02944 0 9 0H21C25.9706 0 30 4.02944 30 9C30 13.9706 25.9706 18 21 18H9C4.02944 18 0 13.9706 0 9Z"
            fill={border}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 6C19.3431 6 18 7.34315 18 9C18 10.6569 19.3431 12 21 12C22.6569 12 24 10.6569 24 9C24 7.34315 22.6569 6 21 6ZM16 9C16 6.23858 18.2386 4 21 4C23.7614 4 26 6.23858 26 9C26 11.7614 23.7614 14 21 14C18.2386 14 16 11.7614 16 9Z"
            fill={border}
          />
        </svg>
      ) : (
        <svg width="30" height="18" viewBox="0 0 30 18">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16H21C24.866 16 28 12.866 28 9C28 5.13401 24.866 2 21 2H9ZM0 9C0 4.02944 4.02944 0 9 0H21C25.9706 0 30 4.02944 30 9C30 13.9706 25.9706 18 21 18H9C4.02944 18 0 13.9706 0 9Z"
            fill={border}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6ZM4 9C4 6.23858 6.23858 4 9 4C11.7614 4 14 6.23858 14 9C14 11.7614 11.7614 14 9 14C6.23858 14 4 11.7614 4 9Z"
            fill={border}
          />
        </svg>
      )}
    </div>
  );
};
