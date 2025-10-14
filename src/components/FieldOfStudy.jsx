export default function FieldOfStudy({
  number,
  schoolFieldOfStudyField,
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
        value={schoolFieldOfStudyField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {schoolFieldOfStudyField.status === "invalid" && (
        <span className="error" aria-live="polite">
          Field of study required.
        </span>
      )}
    </>
  );
}
