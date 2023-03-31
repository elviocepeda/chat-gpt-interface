import { useContext } from "react";
import { context } from "./Provider";

export const useStore = () => {
  const store = useContext(context)[0];
  const dispatch = useContext(context)[1];
  return { store, dispatch };
};
