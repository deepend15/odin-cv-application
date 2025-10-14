export default function SchoolName({
  number,
  formStatus,
  schoolNameField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    schoolNameField.status === "invalid" ||
    (formStatus === "invalid" && schoolNameField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      <label htmlFor={"school" + number + "Name"}>Name of School:</label>
      <input
        type="text"
        id={"school" + number + "Name"}
        name={"school" + number + "Name"}
        value={schoolNameField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      />
      {(schoolNameField.status === "invalid" ||
        (formStatus === "invalid" && schoolNameField.status === "initial")) && (
        <span className="error" aria-live="polite">
          School name required.
        </span>
      )}
    </>
  );
}
