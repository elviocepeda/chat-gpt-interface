import { useStore } from "../store";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { store } = useStore();
  const {
    login: { uuid, token },
  } = store;
  if (!uuid && !token) {
    return <Navigate to="/" />;
  }
  return children;
};
