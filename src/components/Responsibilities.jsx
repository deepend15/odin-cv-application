export default function Responsibilities({
  number,
  companyResponsibilitiesField,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"company" + number + "Responsibilities"}>
        Main Responsibilities:
      </label>
      <textarea
        id={"company" + number + "Responsibilities"}
        name={"company" + number + "Responsibilities"}
        rows="4"
        cols="35"
        value={companyResponsibilitiesField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {companyResponsibilitiesField.status === "invalid" && (
        <span className="error" aria-live="polite">
          Required.
        </span>
      )}
    </>
  );
}
