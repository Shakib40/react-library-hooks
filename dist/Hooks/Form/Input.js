import React from "react";
import classes from "../styles/Input.module.css";
import PropTypes from "prop-types";

export const InputField = ({
  type, // text || pasword || email
  placeholder,
  name,
  disabled, // false || true
  value,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  errorMessage, // errorMessage
  helperText, // helper message
  helperType, // default || error || success || warning || info
  inputStyle, // Custom style for the input
  labelStyle, // Custom style for the label
  helperStyle, // Custom style for message
  errorStyle, // Custom style for the error message
  // fieldArrayIndex, // will use this for ArrayField to get index
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
    <>
      <div className={classes["control"]}>
        <input
          id={name + value} // NO_CHANGE
          name={name}
          className={classes["input"]} // NO_CHANGE
          style={inputStyle} // NO_CHANGE
          onChange={(event) => onChange(event, name, type || "text")} // NO_CHANGE
          onFocus={handleFocus} // NO_CHANGE
          onBlur={handleBlur} // NO_CHANGE
          value={value} // NO_CHANGE
          onKeyDown={handleKeyDown} // NO_CHANGE
          disabled={disabled}
          type={type || "text"} // pasword || email
        />
        <label htmlFor={name} className={classes["label"]} style={labelStyle}>
          {placeholder || "Please enter something..."}
        </label>
        <div className={classes["bar"]}></div>
      </div>

      {helperText && (
        <div className={classes.helperText} style={helperStyle}>
          {helperText}
        </div>
      )}

      {errorMessage && (
        <div className={classes.errorMessage} style={errorStyle}>
          {errorMessage}
        </div>
      )}
    </>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string, // "string"
  name: PropTypes.string.isRequired, // "string"
  value: PropTypes.string.isRequired, // "string"
  onChange: PropTypes.func.isRequired,
  // fieldArrayIndex: PropTypes.number,
  helperText: PropTypes.string, // "string"
  errorMessage: PropTypes.string, // "string"
  inputStyle: PropTypes.object, // {}
  labelStyle: PropTypes.object, // {}
  helperStyle: PropTypes.object, // {}
  errorStyle: PropTypes.object, // {}
};
