// Dropdown.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ name, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <select name={name} value={selectedOption} onChange={handleSelect}>
        {options?.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
