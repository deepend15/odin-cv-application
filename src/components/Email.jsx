import { useState } from "react";

export default function Email() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("valid");
  const [valueChanged, setValueChanged] = useState(false);

  function checkValidity(e) {
    if (e.target.validity.valueMissing) {
      setStatus("missing");
      e.target.classList.add("invalid");
    } else if (e.target.validity.typeMismatch) {
      setStatus("invalid");
      e.target.classList.add("invalid");
    } else {
      setStatus("valid");
      e.target.classList.remove("invalid");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
    setValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkValidity(e);
    }
  }

  function handleBlur(e) {
    if (valueChanged) checkValidity(e);
  }

  let message;
  if (status === "invalid") message = "Invalid email address.";
  if (status === "missing") message = "Email address required.";

  return (
    <>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {status !== "valid" && (
        <span className="error" aria-live="polite">
          {message}
        </span>
      )}
    </>
  );
}
