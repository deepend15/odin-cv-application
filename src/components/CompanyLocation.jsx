export default function CompanyLocation({
  number,
  value,
  isValid,
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Company location required.
        </span>
      )}
    </>
  );
}
