// Form.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ initialValues, onSubmit, children }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event, name, type) => {
    // console.log("handleChange 11", event, name, type);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: ["text", "password", "email"].includes(type)
        ? event?.target?.value
        : event,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  // const handleChange = (event, name, type) => {
  //   const pathParts = name?.split(".");
  //   const [objectName, arrayIndex, fieldName] = pathParts;

  //   console.log(
  //     "handleChange",
  //     type,
  //     objectName, // "contact"
  //     Number(arrayIndex), // "1"
  //     fieldName, // "email"
  //     event?.target?.value
  //   ); // Output: ["contact", "1", "email"]

  //   if (["text", "password", "email"].includes(type)) {
  //     if (Number(arrayIndex) >= 0) {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         [objectName]: prevValues[objectName]?.map((item, currentIndex) =>
  //           Number(arrayIndex) === currentIndex
  //             ? { ...item, [fieldName]: event?.target?.value }
  //             : item
  //         ),
  //       }));

  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     } else {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         [name]: event?.target?.value,
  //       }));
  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     }
  //   } else if (type === "select") {
  //     if (Number(arrayIndex) >= 0) {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         objectName: prevValues?.[objectName]?.map((item, currentIndex) =>
  //           currentIndex === Number(arrayIndex)
  //             ? { ...item, [fieldName]: event }
  //             : item
  //         ),
  //       }));

  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     } else {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         [name]: event,
  //       }));
  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     }
  //   } else if (type === "checkbox" || type === "radio") {
  //     if (Number(arrayIndex) >= 0) {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         objectName: prevValues?.[objectName]?.map((item, currentIndex) =>
  //           currentIndex === Number(arrayIndex)
  //             ? { ...item, [fieldName]: event }
  //             : item
  //         ),
  //       }));

  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     } else {
  //       setValues((prevValues) => ({
  //         ...prevValues,
  //         [name]: event,
  //       }));
  //       setErrors((prevErrors) => ({
  //         ...prevErrors,
  //         [name]: undefined,
  //       }));
  //     }
  //   }
  // };

  // const handleChange = (event, name, type) => {
  //   setValues((prevValues) => {
  //     const updatedValues = deepClone(prevValues);
  //     updateNestedField(updatedValues, name, event, type);
  //     return updatedValues;
  //   });
  // };

  // const updateNestedField = (values, path, event, type) => {
  //   const pathParts = path.split(".");
  //   let currentObject = values;

  //   for (let i = 0; i < pathParts.length; i++) {
  //     const part = pathParts[i];

  //     if (i === pathParts.length - 1) {
  //       currentObject[part] = type === "checkbox" ? event : event.target.value;
  //     } else {
  //       if (!currentObject[part]) {
  //         currentObject[part] = Array.isArray(currentObject) ? [] : {};
  //       }
  //       currentObject = currentObject[part];
  //     }
  //   }
  // };

  // Deep clone function to ensure immutability

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form
    onSubmit(values);
  };

  const validateForm = (formValues) => {
    const errors = {};

    // Check each field for empty value
    Object.keys(formValues).forEach((fieldName) => {
      if (!formValues[fieldName]) {
        errors[fieldName] = `${fieldName} is required`;
      }
    });

    return errors;
  };

  console.log("values", values);

  return (
    <form onSubmit={handleSubmit}>
      {children({ values, errors, handleChange })}
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default Form;

{
  /* <Form initialValues={initialValues} onSubmit={onSubmit}>
  {({ values, errors, handleChange }) => (
    <>
      <div style={{ padding: "5px" }}>
        <Select
          name="menu1"
          options={options}
          onChange={handleChange}
          isMulti={false}
          isClearable={true}
          value={values.menu1}
          // isDisabled={true}
          isOnlyString={true}
        />
      </div>
      <InputField
        placeholder="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        errorMessage={errors.firstName}
      />
      <InputField
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        errorMessage={errors.password}
      />
    </>
  )}
</Form>; */
}
