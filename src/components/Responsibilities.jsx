export default function Responsibilities({
  number,
  formStatus,
  companyResponsibilitiesField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    companyResponsibilitiesField.status === "invalid" ||
    (formStatus === "invalid" &&
      companyResponsibilitiesField.status === "initial")
  )
    className = "invalid";
  else className = "";

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
        className={className}
        required
      />
      {(companyResponsibilitiesField.status === "invalid" ||
        (formStatus === "invalid" &&
          companyResponsibilitiesField.status === "initial")) && (
        <span className="error" aria-live="polite">
          Required.
        </span>
      )}
    </>
  );
}
