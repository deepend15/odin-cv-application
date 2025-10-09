import { useState } from "react";

export default function Year({ type }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("valid");
  const [valueChanged, setValueChanged] = useState(false);
  const [labelClass, setLabelClass] = useState("");

  function checkValidity(e) {
    const regex = /^\d{4}$/;

    if (e.target.validity.valueMissing) {
      setStatus("missing");
      setLabelClass("year-error");
      e.target.classList.add("invalid");
    } else if (!regex.test(e.target.value)) {
      setStatus("invalid");
      setLabelClass("year-error");
      e.target.classList.add("invalid");
    } else {
      setStatus("valid");
      setLabelClass("");
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
        <label htmlFor={type + "Year"} className={labelClass}>
            Year
            {status === "invalid" && <span>&nbsp;invalid</span>}
            {status === "missing" && <span>&nbsp;required</span>}
        </label>
        <input
          type="tel"
          id={type + "Year"}
          name={type + "Year"}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </div>
  );
}
