export default function Position({
  number,
  companyPositionField,
  handleChange,
  handleBlur,
}) {
  return (
    <>
      <label htmlFor={"company" + number + "Position"}>Position Title:</label>
      <input
        type="text"
        id={"company" + number + "Position"}
        name={"company" + number + "Position"}
        value={companyPositionField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!companyPositionField.isValid && (
        <span className="error" aria-live="polite">
          Position title required.
        </span>
      )}
    </>
  );
}
