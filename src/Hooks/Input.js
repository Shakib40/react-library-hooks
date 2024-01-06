import React from "react";
import classes from "./input.module.css";

export const Input = ({
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
    <div className={classes["input-container"]}>
      <div className={classes["label"]} style={labelStyle}>
        {label}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        style={inputStyle} // Apply custom style to the input
      />
      {errorMessage && (
        <div className={classes["error-message"]} style={errorStyle}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
