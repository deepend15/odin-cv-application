export default function Phone({ phoneField, handleChange, handleBlur }) {
  return (
    <>
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phoneField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!phoneField.isValid && (
        <span className="error" aria-live="polite">
          Phone number required.
        </span>
      )}
    </>
  );
}
