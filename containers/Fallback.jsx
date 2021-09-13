import React from "react";

const Fallback = (Component) => {
  return (props) => {
    if (props && Object.keys(props).length > 0) {
      return <Component {...props} />;
    } else {
      return <div className="font-oxygen text-2xl">Loading...</div>;
    }
  };
};

export default Fallback;
