export default function MonthAndYear({ type }) {
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
    <div className="month-and-year">
      <div>
        <label htmlFor={type + "Month"}>Month</label>
        <select name={type + "Month"} id={type + "Month"}>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={type + "Year"}>Year</label>
        <input type="tel" id={type + "Year"} name={type + "Year"} required />
      </div>
    </div>
  );
}
