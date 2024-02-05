import React from "react";
import classes from "../styles/Textarea.module.css";

export const Textarea = ({
  label,
  placeholder = "Enter",
  disabled = false,
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  errorMessage,
  inputStyle, // Custom style for the input
  labelStyle, // Custom style for the label
  errorStyle, // Custom style for the error message
}) => {
  const handleFocus = (e) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleKeyDown = (e) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div style={{ margin: "20px 0px" }}>
      <div className={classes["control"]}>
        <textarea
          id="firstname"
          className={classes["textarea"]}
          type="text"
          placeholder={""}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={inputStyle} // Apply custom style to the input
        />
        <label for="firstname" className={classes["label"]}>
          First name
        </label>
        <div className={classes["bar"]}></div>
      </div>
      <span className={classes.helperText}>Set width to 250px</span>
    </div>
  );
};
