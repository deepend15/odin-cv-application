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
};
