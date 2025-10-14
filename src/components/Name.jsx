export default function Name({
  formStatus,
  nameField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    nameField.status === "invalid" ||
    (formStatus === "invalid" && nameField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      {formStatus !== "submitted" && (
        <>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={nameField.value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={className}
            required
          />
          {(nameField.status === "invalid" ||
            (formStatus === "invalid" && nameField.status === "initial")) && (
            <span className="error" aria-live="polite">
              Name required.
            </span>
          )}
        </>
      )}
      {formStatus === "submitted" && (
        <>
          <span className="submitted-form-field-name">Name:</span>
          <span>{nameField.value}</span>
        </>
      )}
    </>
  );
}
