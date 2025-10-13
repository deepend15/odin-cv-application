export default function Position({
  number,
  value,
  isValid,
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Position title required.
        </span>
      )}
    </>
  );
}
