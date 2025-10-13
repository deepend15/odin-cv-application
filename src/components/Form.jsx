import "../styles/Form.css";
import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import { initialFormFields } from "./FormFields";

export default function Form() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const formFieldArray = Object.entries(formFields);

  function handleChange(e) {
    // identify field being changed
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );
    // identify Object property to update
    const targetedPropertyName = targetedField[0][0];
    // create new version of the property
    const previousField = formFields[targetedPropertyName];
    const newField = {
      ...previousField,
      value: e.target.value,
      hasChanged: true,
    };
    // create new 'formFields' with new property, and update state
    const newFormFields = { ...formFields, [targetedPropertyName]: newField };
    setFormFields(newFormFields);
  }

  return (
    <form action="" method="">
      <General
        nameValue={formFields.Name.value}
        nameIsValid={formFields.Name.isValid}
        handleChange={handleChange}
      />
      <Education />
      <Experience />
      <button>Submit</button>
    </form>
  );
}
