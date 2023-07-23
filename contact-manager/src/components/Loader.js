import React from "react";
import loading from "../images/loading.gif";
const Loader = () => {
  return (
    <div className="loading-wrapper">
      <img
        style={{
          width: "5rem",
          height: "5rem",
        }}
        src={loading}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
