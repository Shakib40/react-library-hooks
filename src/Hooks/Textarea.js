import React from "react";

export const Textarea = ({
  placeholder = "Enter",
  disabled = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
