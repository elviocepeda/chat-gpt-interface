import { createContext, useEffect, useReducer } from "react";
import { getUsers } from "../services";
import { initialState } from "./initialState";
import { Reducer } from "./Reducer";

const context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    getUsers(dispatch);
  }, []);

  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};

export { context };
export default Provider;
