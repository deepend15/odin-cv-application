export default function SchoolLocation({
  number,
  value,
  isValid,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"school" + number + "Location"}>Location:</label>
      <input
        type="text"
        id={"school" + number + "Location"}
        name={"school" + number + "Location"}
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          School location required.
        </span>
      )}
    </>
  );
}
