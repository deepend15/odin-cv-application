export default function CompanyName({
  number,
  formStatus,
  companyNameField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    companyNameField.status === "invalid" ||
    (formStatus === "invalid" && companyNameField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      <label htmlFor={"company" + number + "Name"}>Company Name:</label>
      <input
        type="text"
        id={"company" + number + "Name"}
        name={"company" + number + "Name"}
        value={companyNameField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      />
      {(companyNameField.status === "invalid" ||
        (formStatus === "invalid" &&
          companyNameField.status === "initial")) && (
        <span className="error" aria-live="polite">
          Company name required.
        </span>
      )}
    </>
  );
}
