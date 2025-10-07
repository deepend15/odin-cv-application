import { useState } from "react";

export default function Name() {
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
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!valid && (
        <span className="error" aria-live="polite">
          Name required.
        </span>
      )}
    </>
  );
}
