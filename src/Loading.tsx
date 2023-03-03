import loadingIcon from "./assets/react.svg";
import "./Loading.css";


function Loading() {
  return (
    <div className="Loading">
      <img src={loadingIcon} className="loading-icon" alt="Loading icon" />
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;
