import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  label,
  value,
  isChecked,
  onChange,
  name,
  size,
  customStyle,
}) => {
  const checkboxStyle = {
    width: `${size}px`,
    height: `${size}px`,
    cursor: "pointer",
    ...customStyle,
  };

  return (
    <label>
      <input
        style={checkboxStyle}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(!value, name, "checkbox")}
      />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.bool,
  isChecked: PropTypes.bool,
  size: PropTypes.number,
  customStyle: PropTypes.object, // {}
};

Checkbox.defaultProps = {
  value: false, // default is false
  isChecked: false, // default is false
  size: 16, // default is false
};

export default Checkbox;
