export default function Name({ value, isValid, handleChange, handleBlur }) {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Name required.
        </span>
      )}
    </>
  );
}
