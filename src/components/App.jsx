import "../styles/App.css";
import { useState } from "react";
import { initialFormFields } from "./FormFields";
import Form from "./Form";

function App() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const formFieldArray = Object.entries(formFields);
  const [formStatus, setFormStatus] = useState("open");

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
      hasChanged: true,
    };

    if (!(e.target.id === "email" || e.target.id.endsWith("Year"))) {
      newField.status = e.target.validity.valueMissing ? "invalid" : "valid";
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

  function handleSubmit(e) {
    e.preventDefault();

    const invalidEntries = formFieldArray.filter((entry) => {
      // if statement format below is due to https://eslint.org/docs/latest/rules/no-prototype-builtins
      if (Object.prototype.hasOwnProperty.call(entry[1], "hasChanged")) {
        if (!entry[1].hasChanged) return entry[1];
        if (Object.prototype.hasOwnProperty.call(entry[1], "isValid")) {
          return !entry[1].isValid;
        }
        if (Object.prototype.hasOwnProperty.call(entry[1], "status")) {
          return entry[1].status === "invalid" || entry[1].status === "missing";
        }
      }
    });
    if (invalidEntries.length !== 0) {
      setFormStatus("invalid");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setFormStatus("submitted");
      window.scrollTo(0, 0);
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    setFormStatus("open");
    window.scrollTo(0, 0);
  }

  return (
    <>
      <h1>Resume Builder</h1>
      {formStatus !== "submitted" && (
        <Form
          formStatus={formStatus}
          formFields={formFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
        />
      )}
      {formStatus === "submitted" && (
        <>
        </>
      )}
    </>
  );
}

export default App;
