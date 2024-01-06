import React from "react";

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
  showClearButton,
  onClear,
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
    <div>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </div>
  );
};
