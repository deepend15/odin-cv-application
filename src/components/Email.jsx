export default function Email({
  formStatus,
  emailField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    emailField.status === "missing" ||
    emailField.status === "invalid" ||
    (formStatus === "invalid" && emailField.status === "initial")
  )
    className = "invalid";
  else className = "";

  let message;
  if (emailField.status === "invalid") message = "Invalid email address.";
  if (
    emailField.status === "missing" ||
    (formStatus === "invalid" && emailField.status === "initial")
  )
    message = "Email address required.";

  return (
    <>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={emailField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      />
      {(emailField.status === "invalid" ||
        emailField.status === "missing" ||
        (formStatus === "invalid" && emailField.status === "initial")) && (
        <span className="error" aria-live="polite">
          {message}
        </span>
      )}
    </>
  );
}
