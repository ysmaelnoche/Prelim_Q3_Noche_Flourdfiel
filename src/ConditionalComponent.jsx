import React, { useState } from "react";

const ConditionalComponent = ({ fullName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Name" : "Show Name"}
      </button>
      {isVisible && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default ConditionalComponent;
