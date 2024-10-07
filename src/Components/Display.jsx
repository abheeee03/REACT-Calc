import React from "react";

const Display = ({ value }) => {
  return (
    <div>
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default Display;
