import "./Loading.css";

export const Loading = () => {
  return (
    <div className="loading_wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
