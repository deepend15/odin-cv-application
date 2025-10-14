export default function Position({
  number,
  formStatus,
  companyPositionField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    companyPositionField.status === "invalid" ||
    (formStatus === "invalid" && companyPositionField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      {formStatus !== "submitted" && (
        <>
          <label htmlFor={"company" + number + "Position"}>
            Position Title:
          </label>
          <input
            type="text"
            id={"company" + number + "Position"}
            name={"company" + number + "Position"}
            value={companyPositionField.value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={className}
            required
          />
          {(companyPositionField.status === "invalid" ||
            (formStatus === "invalid" &&
              companyPositionField.status === "initial")) && (
            <span className="error" aria-live="polite">
              Position title required.
            </span>
          )}
        </>
      )}
      {formStatus === "submitted" && (
        <>
          <span className="submitted-form-field-name">Position Title:</span>
          <span>{companyPositionField.value}</span>
        </>
      )}
    </>
  );
}
