import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import CROSS from "../images/cross.png";
import Down from "../images/down.png";
import classes from "../styles/select.module.css";

const Select = ({
  options,
  onChange,
  isMulti,
  isClearable,
  name,
  isDisabled,
  isOnlyString,
  value,
}) => {
  const [optionsList, setOptionsList] = useState(options);
  const [selectedValues, setSelectedValues] = useState(isMulti ? [] : null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  let checkCondition = true;

  if (isMulti) {
    if (selectedValues.length > 0) {
      checkCondition = false;
    } else {
      checkCondition = true;
    }
  } else {
    if (selectedValues) {
      checkCondition = false;
    }
  }

  useEffect(() => {
    if (value && checkCondition) {
      setSelectedValues(value);
    } else {
      setSelectedValues(value);
    }
  }, [value]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    if (isMulti) {
      setSelectedValues((prevSelectedValues) => [
        ...prevSelectedValues,
        option,
      ]);

      const updatedOptions = optionsList.filter(
        (opt) => opt.value !== option.value
      );
      setOptionsList(updatedOptions);
    } else {
      setSelectedValues(option);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Condition for isOnlyString condition
  useEffect(() => {
    if (selectedValues) {
      if (isOnlyString) {
        if (isMulti) {
          console.log("selectedValues", selectedValues);
          let tempData = [];
          selectedValues?.length > 0 &&
            selectedValues?.map((data) => tempData?.push(data?.value));
          onChange(tempData, name, "select");
        } else {
          onChange(selectedValues?.value, name, "select");
        }
      } else {
        onChange(selectedValues, name, "select");
      }
    }
  }, [selectedValues, isMulti, isOnlyString, name]);

  return (
    <div
      className={`${classes["select"]} ${isOpen ? classes["open"] : ""} ${
        isDisabled ? classes["isDisabled"] : classes["notDisabled"]
      }`}
      ref={dropdownRef}
      onClick={handleToggle}>
      <div className={classes["selected-value"]}>
        <div>
          {isMulti ? (
            <>
              {selectedValues &&
                selectedValues.length > 0 &&
                selectedValues.map((selectedOption) => (
                  <span
                    key={selectedOption.value}
                    className={classes["selectedValue"]}>
                    {selectedOption.label}
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedValues((prevSelectedValues) =>
                          prevSelectedValues.filter(
                            (option) => option.value !== selectedOption.value
                          )
                        );
                      }}>
                      <img
                        src={CROSS}
                        alt="Down"
                        className={classes["ICON_2"]}
                      />
                    </span>
                  </span>
                ))}
            </>
          ) : null}

          {!isMulti ? (
            <span className={classes["placeholder"]}>
              {selectedValues?.label}
            </span>
          ) : null}

          {checkCondition && (
            <span className={classes["placeholder"]}>Select option(s)</span>
          )}
        </div>
        <div>
          {isClearable && !checkCondition && (
            <span
              className={classes["clear-selection"]}
              onClick={() => {
                if (isMulti) {
                  setSelectedValues([]);
                  setOptionsList(options);
                } else {
                  setSelectedValues(null);
                }
              }}>
              <img src={CROSS} alt="Down" className={classes["ICON"]} />
            </span>
          )}

          <img src={Down} alt="Down" className={classes["ICON"]} />
        </div>
      </div>

      {isOpen && (
        <div className={classes["options"]}>
          <div>
            {optionsList?.map((option, index) => (
              <div
                key={index}
                className={`${classes["option"]} ${
                  option?.isDisabled || option?.isFixed
                    ? classes["isDisabled"]
                    : classes["notDisabled"]
                }`}
                onClick={() => handleSelectOption(option)}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired, // tested
      value: PropTypes.string.isRequired, // tested
      isFixed: PropTypes.bool,
      isDisabled: PropTypes.bool,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired, // tested
  name: PropTypes.string.isRequired, // tested
  isMulti: PropTypes.bool, // tested
  isDisabled: PropTypes.bool, // tested
  isOnlyString: PropTypes.bool, // tested // output [{ label: "", value: "" }, { label: "", value: "" }];  ||  ["", "", ""];
};

Select.defaultProps = {
  isMulti: false, // default is false
  isClearable: false, // default is false
};

export default Select;
