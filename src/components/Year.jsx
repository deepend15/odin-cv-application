export default function Year({
  type,
  formStatus,
  value,
  status,
  handleChange,
  handleBlur,
}) {
  let inputClassName;
  if (
    status === "missing" ||
    status === "invalid" ||
    (formStatus === "invalid" && status === "initial")
  )
    inputClassName = "invalid";
  else inputClassName = "";

  let labelClassName;
  if (
    status === "missing" ||
    status === "invalid" ||
    (formStatus === "invalid" && status === "initial")
  )
    labelClassName = "year-error";
  else labelClassName = "";

  return (
    <div>
      <label htmlFor={type + "Year"} className={labelClassName}>
        Year
        {status === "invalid" && <span>&nbsp;invalid</span>}
        {(status === "missing" ||
          (formStatus === "invalid" && status === "initial")) && (
          <span>&nbsp;required</span>
        )}
      </label>
      <input
        type="tel"
        id={type + "Year"}
        name={type + "Year"}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={inputClassName}
        required
      />
    </div>
  );
}
