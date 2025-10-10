export default function Email({ value, status, handleChange, handleBlur }) {
  let emailError;
  if (status === "invalid") emailError = "Invalid email address.";
  if (status === "missing") emailError = "Email address required.";

  return (
    <>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {status !== "valid" && (
        <span className="error" aria-live="polite">
          {emailError}
        </span>
      )}
    </>
  );
}
