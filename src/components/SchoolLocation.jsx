export default function SchoolLocation({
  number,
  schoolLocationField,
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
        value={schoolLocationField.value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!schoolLocationField.isValid && (
        <span className="error" aria-live="polite">
          School location required.
        </span>
      )}
    </>
  );
}
