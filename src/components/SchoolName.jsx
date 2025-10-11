export default function SchoolName({
  number,
  value,
  isValid,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"school" + number + "Name"}>Name of School:</label>
      <input
        type="text"
        id={"school" + number + "Name"}
        name={"school" + number + "Name"}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          School name required.
        </span>
      )}
    </>
  );
}
