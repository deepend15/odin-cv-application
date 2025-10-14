export default function Degree({
  number,
  schoolDegreeField,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"school" + number + "Degree"}>Degree received:</label>
      <select
        id={"school" + number + "Degree"}
        name={"school" + number + "Degree"}
        value={schoolDegreeField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      >
        <option value="">--Select one--</option>
        <option value="diploma">Diploma / GED</option>
        <option value="associate">Associate's</option>
        <option value="bachelor">Bachelor's</option>
        <option value="master">Master's / Equivalent</option>
        <option value="doctorate">Doctorate / Equivalent</option>
      </select>
      {schoolDegreeField.status === "invalid" && (
        <span className="error" aria-live="polite">
          Degree required.
        </span>
      )}
    </>
  );
}
