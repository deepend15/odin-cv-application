import { useState } from "react";

export default function Responsibilities({ number }) {
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
      <label htmlFor={"company" + number + "Responsibilities"}>Main Responsibilities:</label>
      <textarea
        id={"company" + number + "Responsibilities"}
        name={"company" + number + "Responsibilities"}
        rows="4"
        cols="35"
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {!valid && (
        <span className="error" aria-live="polite">
          Required.
        </span>
      )}
    </>
  );
}