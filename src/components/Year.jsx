import { useState } from "react";

export default function Year({ type }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("valid");
  const [valueChanged, setValueChanged] = useState(false);

  function checkValidity(e) {
    const regex = /^\d{4}$/;

    if (e.target.validity.valueMissing) {
      setStatus("missing");
      e.target.classList.add("invalid");
    } else if (!regex.test(e.target.value)) {
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

  return (
      <div>
        <label htmlFor={type + "Year"}>Year</label>
        <input
          type="tel"
          id={type + "Year"}
          name={type + "Year"}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {status === "missing" && (
          <span className="year-error" aria-live="polite">
            Required.
          </span>
        )}
        {status === "invalid" && (
          <span className="year-error" aria-live="polite">
            Invalid.
          </span>
        )}
      </div>
  );
}
