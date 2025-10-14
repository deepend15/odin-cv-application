export default function CompanyName({
  number,
  companyNameField,
  handleChange,
  handleBlur,
}) {
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
        required
      />
      {!companyNameField.isValid && (
        <span className="error" aria-live="polite">
          Company name required.
        </span>
      )}
    </>
  );
}
