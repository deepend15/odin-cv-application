export const initialFormFields = {
  General: {
    childIds: ["name", "email", "phone"],
  },
  Name: {
    id: "name",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  Email: {
    id: "email",
    value: "",
    status: "valid",
    hasChanged: false,
  },
  Phone: {
    id: "phone",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  Education: {
    childIds: ["school1"],
  },
  School1: {
    id: "school1",
    childIds: [
      "school1Name",
      "school1Location",
      "school1StartMonth",
      "school1StartYear",
      "school1EndMonth",
      "school1EndYear",
      "school1Degree",
      "school1FieldOfStudy",
    ],
  },
  School1Name: {
    id: "school1Name",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  School1Location: {
    id: "school1Location",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  School1StartMonth: {
    id: "school1StartMonth",
    value: "January",
  },
  School1StartYear: {
    id: "school1StartYear",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  School1EndMonth: {
    id: "school1EndMonth",
    value: "January",
  },
  School1EndYear: {
    id: "school1EndYear",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  School1Degree: {
    id: "school1Degree",
    value: "",
    isValid: true,
    hasChanged: false,
  },
  School1FieldOfStudy: {
    id: "school1FieldOfStudy",
    value: "",
    isValid: true,
    hasChanged: false,
  },
};
