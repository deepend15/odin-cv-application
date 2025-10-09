import { useState } from "react";

export default function Month({ type }) {
  const [value, setValue] = useState("January");

  function handleChange(e) {
    setValue(e.target.value);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <label htmlFor={type + "Month"}>Month</label>
      <select
        name={type + "Month"}
        id={type + "Month"}
        value={value}
        onChange={handleChange}
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
