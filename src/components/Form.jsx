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

    if (e.target.id.endsWith("Year")) {
      const regex = /^\d{4}$/;

      newField.status = e.target.validity.valueMissing
        ? "missing"
        : !regex.test(e.target.value)
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

    if (e.target.validity.valueMissing || newField.status === "invalid") {
      if (e.target.id.endsWith("Degree"))
        e.target.classList.add("invalid-select");
      else {
        if (e.target.id.endsWith("Year")) {
          e.target.previousElementSibling.classList.add("year-error");
        }
        e.target.classList.add("invalid");
      }
    } else {
      e.target.classList.remove("invalid");
      e.target.classList.remove("invalid-select");
      e.target.previousElementSibling.classList.remove("year-error");
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
        formFields={formFields}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Education
        formFields={formFields}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Experience
        formFields={formFields}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <button>Submit</button>
    </form>
  );
}
