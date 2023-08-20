import React, { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const AddForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length > 0) {
      addTask(userInput);
    }
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
          <InputField value={userInput} onChange={handleChange} />
        </div>

        <div className="col-5">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AddForm;
