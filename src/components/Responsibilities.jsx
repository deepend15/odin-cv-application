export default function Responsibilities({
  number,
  value,
  isValid,
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
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Required.
        </span>
      )}
    </>
  );
}
