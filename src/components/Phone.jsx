import { useState } from "react";

export default function Phone() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);
  const [valueChanged, setValueChanged] = useState(false);

  function checkValidity(e) {
    if (e.target.validity.valueMissing) {
      setValid(false);
      e.target.classList.add("invalid");
    } else {
      setValid(true);
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
    <>
      <label htmlFor="phone">Phone number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={value}
        required
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {!valid && (
        <span className="error" aria-live="polite">
          Phone number required.
        </span>
      )}
    </>
  );
}
