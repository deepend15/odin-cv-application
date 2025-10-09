import { useState } from "react";

export default function Degree({ number }) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);
  const [valueChanged, setValueChanged] = useState(false);

  function checkValidity(e) {
    if (e.target.validity.valueMissing) {
      setValid(false);
      e.target.classList.add("invalid-select");
    } else {
      setValid(true);
      e.target.classList.remove("invalid-select");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
    setValueChanged(true);
    if (e.target.classList.contains("invalid-select")) {
      checkValidity(e);
    }
  }

  function handleBlur(e) {
    if (valueChanged) checkValidity(e);
  }

  return (
    <>
      <label htmlFor={"school" + number + "Degree"}>Degree received:</label>
      <select
        name={"school" + number + "Degree"}
        id={"school" + number + "Degree"}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      >
        <option value="">--Select one--</option>
        <option value="diploma">Diploma / GED</option>
        <option value="associate">Associate's</option>
        <option value="bachelor">Bachelor's</option>
        <option value="master">Master's / Equivalent</option>
        <option value="doctorate">Doctorate / Equivalent</option>
      </select>
      {!valid && (
        <span className="error" aria-live="polite">
          Degree required.
        </span>
      )}
    </>
  );
}
