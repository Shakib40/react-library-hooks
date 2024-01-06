import React from "react";

export const Input = ({
  placeholder = "Enter",
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
