export default function CompanyLocation({
  number,
  companyLocationField,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"company" + number + "Location"}>Location:</label>
      <input
        type="text"
        id={"company" + number + "Location"}
        name={"company" + number + "Location"}
        value={companyLocationField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!companyLocationField.isValid && (
        <span className="error" aria-live="polite">
          Company location required.
        </span>
      )}
    </>
  );
}
