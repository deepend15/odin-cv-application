export default function Phone({ value, isValid, handleChange, handleBlur }) {
  return (
    <>
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!isValid && (
        <span className="error" aria-live="polite">
          Phone number required.
        </span>
      )}
    </>
  );
}
