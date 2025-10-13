export default function Year({
  type,
  value,
  status,
  handleChange,
  handleBlur,
}) {
  return (
    <div>
      <label htmlFor={type + "Year"}>
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
