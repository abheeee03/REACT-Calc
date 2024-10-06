import React from "react";

const Display = ({ Number }) => {
  return (
    <div>
      <input type="text" value={Number} readOnly />
    </div>
  );
};

export default Display;
