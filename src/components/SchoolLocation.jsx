export default function SchoolLocation({
  number,
  formStatus,
  schoolLocationField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    schoolLocationField.status === "invalid" ||
    (formStatus === "invalid" && schoolLocationField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      <label htmlFor={"school" + number + "Location"}>Location:</label>
      <input
        type="text"
        id={"school" + number + "Location"}
        name={"school" + number + "Location"}
        value={schoolLocationField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      />
      {(schoolLocationField.status === "invalid" ||
        (formStatus === "invalid" &&
          schoolLocationField.status === "initial")) && (
        <span className="error" aria-live="polite">
          School location required.
        </span>
      )}
    </>
  );
}
