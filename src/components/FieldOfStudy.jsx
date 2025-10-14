export default function FieldOfStudy({
  number,
  formStatus,
  schoolFieldOfStudyField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    schoolFieldOfStudyField.status === "invalid" ||
    (formStatus === "invalid" && schoolFieldOfStudyField.status === "initial")
  )
    className = "invalid";
  else className = "";

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
        className={className}
        required
      />
      {(schoolFieldOfStudyField.status === "invalid" ||
        (formStatus === "invalid" &&
          schoolFieldOfStudyField.status === "initial")) && (
        <span className="error" aria-live="polite">
          Field of study required.
        </span>
      )}
    </>
  );
}
