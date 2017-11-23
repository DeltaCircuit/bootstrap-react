import React from "react";

const Container = ({ fluid, style, children, className }) => {
  const containerClass = fluid ? "container-fluid" : "container";
  return (
    <div style={style} className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
