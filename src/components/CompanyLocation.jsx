export default function CompanyLocation({
  number,
  formStatus,
  companyLocationField,
  handleChange,
  handleBlur,
}) {
  let className;
  if (
    companyLocationField.status === "invalid" ||
    (formStatus === "invalid" && companyLocationField.status === "initial")
  )
    className = "invalid";
  else className = "";

  return (
    <>
      <label htmlFor={"company" + number + "Location"}>Location:</label>
      <input
        type="text"
        id={"company" + number + "Location"}
        name={"company" + number + "Location"}
        value={companyLocationField.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        required
      />
      {(companyLocationField.status === "invalid" ||
        (formStatus === "invalid" &&
          companyLocationField.status === "initial")) && (
        <span className="error" aria-live="polite">
          Company location required.
        </span>
      )}
    </>
  );
}
