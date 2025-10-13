import "../styles/Form.css";
import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import { initialFormFields } from "./FormFields";

export default function Form() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const formFieldArray = Object.entries(formFields);

  function checkValidity(e) {
    // identify field being checked
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );

    // identify Object property to update
    const targetedPropertyString = targetedField[0][0];

    // create new version of the property / value
    const previousField = formFields[targetedPropertyString];
    let newField = {
      ...previousField,
      value: e.target.value,
    };

    if (!(e.target.id === "email" || e.target.id.endsWith("Year"))) {
      newField.isValid = e.target.validity.valueMissing ? false : true;
    }

    if (e.target.id === "email") {
      newField.status = e.target.validity.valueMissing
        ? "missing"
        : e.target.validity.typeMismatch
        ? "invalid"
        : "valid";
    }

    // create new 'formFields' with new property / value, and update state
    const newFormFields = {
      ...formFields,
      [targetedPropertyString]: newField,
    };
    setFormFields(newFormFields);

    // update element class

    if (
      e.target.validity.valueMissing ||
      (e.target.id === "email" && e.target.validity.typeMismatch)
    ) {
      if (e.target.id.endsWith("Degree"))
        e.target.classList.add("invalid-select");
      else e.target.classList.add("invalid");
    } else {
      e.target.classList.remove("invalid");
      e.target.classList.remove("invalid-select");
    }
  }

  function handleChange(e) {
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );
    const targetedPropertyString = targetedField[0][0];
    const previousField = formFields[targetedPropertyString];
    const newField = {
      ...previousField,
      value: e.target.value,
      hasChanged: true,
    };
    const newFormFields = {
      ...formFields,
      [targetedPropertyString]: newField,
    };
    setFormFields(newFormFields);

    if (
      e.target.classList.contains("invalid") ||
      e.target.classList.contains("invalid-select")
    )
      checkValidity(e);
  }

  function handleBlur(e) {
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );
    if (targetedField[0][1].hasChanged) checkValidity(e);
  }

  return (
    <form action="" method="">
      <General
        nameValue={formFields.Name.value}
        nameIsValid={formFields.Name.isValid}
        phoneValue={formFields.Phone.value}
        phoneIsValid={formFields.Phone.isValid}
        emailValue={formFields.Email.value}
        emailStatus={formFields.Email.status}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Education />
      <Experience />
      <button>Submit</button>
    </form>
  );
}
