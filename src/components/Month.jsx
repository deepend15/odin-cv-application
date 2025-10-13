export default function Month({ type, value, handleChange }) {
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
        id={type + "Month"}
        name={type + "Month"}
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
