export default function CompanyName({
  number,
  value,
  isValid,
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Company name required.
        </span>
      )}
    </>
  );
}
