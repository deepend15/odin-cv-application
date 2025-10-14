export default function Email({ emailField, handleChange, handleBlur }) {
  let message;
  if (emailField.status === "invalid") message = "Invalid email address.";
  if (emailField.status === "missing") message = "Email address required.";

  return (
    <>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={emailField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {status !== "valid" && (
        <span className="error" aria-live="polite">
          {message}
        </span>
      )}
    </>
  );
}
