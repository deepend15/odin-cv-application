export default function Degree({
  number,
  formStatus,
  schoolDegreeField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    schoolDegreeField.status === "invalid" ||
    (formStatus === "invalid" && schoolDegreeField.status === "initial")
  )
    className = "invalid-select";
  else className = "";

  return (
    <>
      <label htmlFor={"school" + number + "Degree"}>Degree received:</label>
      <select
        id={"school" + number + "Degree"}
        name={"school" + number + "Degree"}
        value={schoolDegreeField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      >
        <option value="">--Select one--</option>
        <option value="diploma">Diploma / GED</option>
        <option value="associate">Associate's</option>
        <option value="bachelor">Bachelor's</option>
        <option value="master">Master's / Equivalent</option>
        <option value="doctorate">Doctorate / Equivalent</option>
      </select>
      {(schoolDegreeField.status === "invalid" ||
        (formStatus === "invalid" &&
          schoolDegreeField.status === "initial")) && (
        <span className="error" aria-live="polite">
          Degree required.
        </span>
      )}
    </>
  );
}
