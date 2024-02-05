import React from "react";
import PropTypes from "prop-types";

const FieldArray = ({ name, children, initialValues = [] }) => {
  const [fields, setFields] = React.useState(initialValues);
  const push = (values) => {
    setFields([...fields, initialValues]);
    values?.[name].push(initialValues?.[0]);
  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
          {children({
            field,
            index,
            push,
            remove: () => removeField(index),
          })}
        </div>
      ))}
    </div>
  );
};

FieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  initialValues: PropTypes.array.isRequired,
};

export default FieldArray;

{
  /* <FieldArray name="contact" initialValues={initialValues.contact}>
{({ field, index, remove, push }) => (
  <div key={index}>
    <InputField
      placeholder="phone"
      name={`contact.${index}.phone`}
      value={field?.phone}
      onChange={handleChange}
      errorMessage={errors?.contact?.[index]?.phone}
      // fieldArrayIndex={index}
    />
    <InputField
      placeholder="Email"
      name={`contact.${index}.email`}
      value={field?.email}
      onChange={handleChange}
      errorMessage={errors?.contact?.[index]?.email}
      // fieldArrayIndex={index}
    />
    <button type="button" onClick={() => push(values)}>
      ADD
    </button>
    <button type="button" onClick={() => remove(index)}>
      REMOVE
    </button>
  </div>
)}
</FieldArray> */
}
