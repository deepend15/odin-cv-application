export default function FieldOfStudy({
  number,
  value,
  isValid,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"school" + number + "FieldOfStudy"}>
        Field of study:
      </label>
      <input
        type="text"
        id={"school" + number + "FieldOfStudy"}
        name={"school" + number + "FieldOfStudy"}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Field of study required.
        </span>
      )}
    </>
  );
}
