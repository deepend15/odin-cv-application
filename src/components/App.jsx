import "../styles/App.css";
import { useState } from "react";
import { initialFormFields } from "./FormFields";
import Form from "./Form";
import ResumeDisplay from "./ResumeDisplay";

function App() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const formFieldArray = Object.entries(formFields);
  const [formStatus, setFormStatus] = useState("open");

  function handleChange(e) {
    // identify field being checked
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );
    // identify Object property to update
    const targetedPropertyString = targetedField[0][0];
    // create new version of the property / value
    const previousField = formFields[targetedPropertyString];
    const newField = {
      ...previousField,
      value: e.target.value,
      hasChanged: true,
    };

    // if field was already flagged as invalid, check validity
    if (
      e.target.classList.contains("invalid") ||
      e.target.classList.contains("invalid-select")
    ) {
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
    }

    // create new 'formFields' with new property / value
    let newFormFields;
    if (e.target.id.endsWith("Degree")) {
      const parentSchoolField = formFieldArray.filter((field) => {
        if (field[1].childIds !== undefined) {
          return field[1].childIds.includes(e.target.id);
        }
      });
      const targetedFieldOfStudyIdArray =
        parentSchoolField[0][1].childIds.filter((id) =>
          id.endsWith("FieldOfStudy")
        );
      const targetedFieldOfStudyId = targetedFieldOfStudyIdArray[0];
      const targetedFieldOfStudyField = formFieldArray.filter(
        (field) => field[1].id === targetedFieldOfStudyId
      );
      const fieldOfStudyPropertyString = targetedFieldOfStudyField[0][0];
      const previousFieldOfStudyField = formFields[fieldOfStudyPropertyString];
      let newFieldOfStudyField;
      if (e.target.value !== "" && e.target.value !== "diploma") {
        newFieldOfStudyField = {
          ...previousFieldOfStudyField,
          isPresent: true,
        };
      } else {
        newFieldOfStudyField = {
          ...previousFieldOfStudyField,
          isPresent: false,
          status: "initial",
          value: "",
          hasChanged: false,
        };
      }
      newFormFields = {
        ...formFields,
        [targetedPropertyString]: newField,
        [fieldOfStudyPropertyString]: newFieldOfStudyField,
      };
    } else {
      newFormFields = {
        ...formFields,
        [targetedPropertyString]: newField,
      };
    }

    // update state
    setFormFields(newFormFields);
  }

  function handleBlur(e) {
    const targetedField = formFieldArray.filter(
      (field) => field[1].id === e.target.id
    );

    if (targetedField[0][1].hasChanged) {
      const targetedPropertyString = targetedField[0][0];
      const previousField = formFields[targetedPropertyString];
      const newField = { ...previousField };

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

      const newFormFields = {
        ...formFields,
        [targetedPropertyString]: newField,
      };
      setFormFields(newFormFields);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const invalidEntries = formFieldArray.filter((entry) => {
      // if statement format below is due to https://eslint.org/docs/latest/rules/no-prototype-builtins
      if (Object.prototype.hasOwnProperty.call(entry[1], "hasChanged")) {
        if (!entry[1].id.endsWith("FieldOfStudy")) {
          if (!entry[1].hasChanged) return entry[1];
          return entry[1].status === "invalid" || entry[1].status === "missing";
        } else {
          if (entry[1].isPresent) {
            if (!entry[1].hasChanged) return entry[1];
            return entry[1].status === "invalid";
          }
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

  function handleAddSchoolOrWork(e) {
    function capitalizeString(string) {
      return string.at(0).toUpperCase() + string.slice(1);
    }

    let idsArray;
    e.target.textContent.endsWith("School")
      ? (idsArray = formFields.Education.childIds)
      : (idsArray = formFields.Experience.childIds);
    const currentNumber = idsArray.length;
    const newNumber = (currentNumber + 1).toString();
    let prefix;
    e.target.textContent.endsWith("School")
      ? (prefix = "school")
      : (prefix = "company");
    const newId = prefix + newNumber;
    const newIdsArray = idsArray.slice();
    newIdsArray.push(newId);
    const newSectionField = {
      childIds: newIdsArray,
    };

    const schoolFieldsArray = [
      "Name",
      "Location",
      "StartMonth",
      "StartYear",
      "EndMonth",
      "EndYear",
    ];
    const workFieldsArray = schoolFieldsArray.slice();
    schoolFieldsArray.push("Degree", "FieldOfStudy");
    workFieldsArray.push("Position", "Responsibilities");
    const newParentPropertyName = capitalizeString(newId);
    const newParentPropertyContents = {
      id: newId,
      childIds: [],
    };
    let targetedArray;
    e.target.textContent.endsWith("School")
      ? (targetedArray = schoolFieldsArray)
      : (targetedArray = workFieldsArray);
    targetedArray.forEach((field) => {
      newParentPropertyContents.childIds.push(prefix + newNumber + field);
    });

    const newFieldPropertyNamesAndContents = [];
    targetedArray.forEach((field) => {
      const newFieldPropertyName = capitalizeString(newId) + field;
      const newFieldPropertyContents = {
        id: newId + field,
        value: "",
      };
      if (field.endsWith("Month")) {
        newFieldPropertyContents.value = "January";
        newFieldPropertyContents.status = "valid";
      } else {
        newFieldPropertyContents.status = "initial";
        newFieldPropertyContents.hasChanged = false;
      }
      if (field === "FieldOfStudy") newFieldPropertyContents.isPresent = false;

      newFieldPropertyNamesAndContents.push([
        newFieldPropertyName,
        newFieldPropertyContents,
      ]);
    });

    let targetedPropertyString;
    e.target.textContent.endsWith("School")
      ? (targetedPropertyString = "Education")
      : (targetedPropertyString = "Experience");
    const newFormFields = {
      ...formFields,
      [targetedPropertyString]: newSectionField,
      [newParentPropertyName]: newParentPropertyContents,
    };
    newFieldPropertyNamesAndContents.forEach((propertyNameAndContentsArray) => {
      newFormFields[propertyNameAndContentsArray[0]] =
        propertyNameAndContentsArray[1];
    });
    setFormFields(newFormFields);
  }

  let h1Text;
  formStatus === "submitted"
    ? (h1Text = formFields.Name.value + " Resume")
    : (h1Text = "Resume Builder");

  return (
    <>
      <h1>{h1Text}</h1>
      {formStatus !== "submitted" && (
        <Form
          formStatus={formStatus}
          formFields={formFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          handleAddSchoolOrWork={handleAddSchoolOrWork}
        />
      )}
      {formStatus === "submitted" && (
        <ResumeDisplay formFields={formFields} handleEdit={handleEdit} />
      )}
    </>
  );
}

export default App;
