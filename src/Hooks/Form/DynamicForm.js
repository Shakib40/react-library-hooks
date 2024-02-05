import React from "react";

const GenerateForm = (formObject) => {
  return Object.keys(formObject).map((key) => {
    const inputConfig = formObject[key];
    if (inputConfig.type === "select") {
      return (
        <div key={key}>
          <label>{key}</label>
          <select name={inputConfig.name}>
            {inputConfig.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div key={key}>
          <label>{key}</label>
          <input type={inputConfig.type} name={inputConfig.name} />
        </div>
      );
    }
  });
};

export default GenerateForm;
