import { verifyAccount } from "../../services";
import { useStore } from "../../store";
import { VERIFY_ACCOUNT_REQUEST } from "../../store/actionTypes";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { MessageModal } from "../../components/modal";
import { Loading } from "../../components";
import "./VerifyAccount.css";

export const VerifyAccount = () => {
  const { store, dispatch } = useStore();
  const { verifyUser } = store;
  const { success, error } = verifyUser;
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams);

  useEffect(() => {
    dispatch({ type: VERIFY_ACCOUNT_REQUEST });
    verifyAccount(dispatch, query);
  }, []);

  return (
    <div className="verify_account_wrapper">
      <div className="verify_account_container">
        {success || error ? (
          <>
            {success ? <MessageModal success={success} button /> : null}
            {error ? <MessageModal error={error} button /> : null}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
