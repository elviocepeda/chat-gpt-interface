import { useStore } from "../store";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { store } = useStore();
  const {
    login: { user },
  } = store;
  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};
