export default function Phone({
  formStatus,
  phoneField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    phoneField.status === "invalid" ||
    (formStatus === "invalid" && phoneField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      {formStatus !== "submitted" && (
        <>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phoneField.value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={className}
            required
          />
          {(phoneField.status === "invalid" ||
            (formStatus === "invalid" && phoneField.status === "initial")) && (
            <span className="error" aria-live="polite">
              Phone number required.
            </span>
          )}
        </>
      )}
      {formStatus === "submitted" && (
        <>
          <span className="submitted-form-field-name">Phone Number:</span>
          <span>{phoneField.value}</span>
        </>
      )}
    </>
  );
}
