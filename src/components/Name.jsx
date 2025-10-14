export default function Name({ nameField, handleChange, handleBlur }) {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={nameField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {!nameField.isValid && (
        <span className="error" aria-live="polite">
          Name required.
        </span>
      )}
    </>
  );
}
