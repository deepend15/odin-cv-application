import Experience from "./Experience";

export const initialFormFields = {
  General: {
    childIds: ["name", "email", "phone"],
  },
  Name: {
    id: "name",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Email: {
    id: "email",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Phone: {
    id: "phone",
    value: "",
    status: "initial",
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
    status: "initial",
    hasChanged: false,
  },
  School1Location: {
    id: "school1Location",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  School1StartMonth: {
    id: "school1StartMonth",
    value: "January",
    status: "valid",
  },
  School1StartYear: {
    id: "school1StartYear",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  School1EndMonth: {
    id: "school1EndMonth",
    value: "January",
    status: "valid",
  },
  School1EndYear: {
    id: "school1EndYear",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  School1Degree: {
    id: "school1Degree",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  School1FieldOfStudy: {
    id: "school1FieldOfStudy",
    isPresent: false,
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Experience: {
    childIds: ["company1"],
  },
  Company1: {
    id: "company1",
    childIds: [
      "company1Name",
      "company1Location",
      "company1StartMonth",
      "company1StartYear",
      "company1EndMonth",
      "company1EndYear",
      "company1Position",
      "company1Responsibilities",
    ],
  },
  Company1Name: {
    id: "company1Name",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Company1Location: {
    id: "company1Location",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Company1StartMonth: {
    id: "company1StartMonth",
    value: "January",
    status: "valid",
  },
  Company1StartYear: {
    id: "company1StartYear",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Company1EndMonth: {
    id: "company1EndMonth",
    value: "January",
    status: "valid",
  },
  Company1EndYear: {
    id: "company1EndYear",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Company1Position: {
    id: "company1Position",
    value: "",
    status: "initial",
    hasChanged: false,
  },
  Company1Responsibilities: {
    id: "company1Responsibilities",
    value: "",
    status: "initial",
    hasChanged: false,
  },
};
