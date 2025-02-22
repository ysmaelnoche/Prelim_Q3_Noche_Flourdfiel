import React, { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";

const InputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div>
      <div>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {fullName && <ConditionalComponent fullName={fullName} />}
    </div>
  );
};

export default InputComponent;
