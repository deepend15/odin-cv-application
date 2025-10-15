import CompanyName from "./CompanyName";
import CompanyLocation from "./CompanyLocation";
import Month from "./Month";
import Year from "./Year";
import Position from "./Position";
import Responsibilities from "./Responsibilities";

export default function Experience({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
}) {
  let className;
  formStatus === "submitted"
    ? (className = "submitted-form-line")
    : (className = "");

  const responsibilitiesLineClasses = `responsibilities-line ${className}`;

  return (
    <fieldset>
      <legend>Work Experience</legend>
      <p className={className}>
        <CompanyName
          number="1"
          formStatus={formStatus}
          companyNameField={formFields.Company1Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={className}>
        <CompanyLocation
          number="1"
          formStatus={formStatus}
          companyLocationField={formFields.Company1Location}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      {formStatus !== "submitted" && (
        <div className="year-line">
          <span>Years Worked:</span>
          <div>
            <div className="month-and-year">
              <Month
                type="company1Start"
                value={formFields.Company1StartMonth.value}
                handleChange={handleChange}
              />
              <Year
                type="company1Start"
                formStatus={formStatus}
                value={formFields.Company1StartYear.value}
                status={formFields.Company1StartYear.status}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <span>to</span>
            <div className="month-and-year">
              <Month
                type="company1End"
                value={formFields.Company1EndMonth.value}
                handleChange={handleChange}
              />
              <Year
                type="company1End"
                formStatus={formStatus}
                value={formFields.Company1EndYear.value}
                status={formFields.Company1EndYear.status}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      )}
      {formStatus === "submitted" && (
        <p className={className}>
          <span className="submitted-form-field-name">Years Worked:</span>
          <span>
            {formFields.Company1StartMonth.value}{" "}
            {formFields.Company1StartYear.value} -{" "}
            {formFields.Company1EndMonth.value}{" "}
            {formFields.Company1EndYear.value}
          </span>
        </p>
      )}
      <p className={className}>
        <Position
          number="1"
          formStatus={formStatus}
          companyPositionField={formFields.Company1Position}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={responsibilitiesLineClasses}>
        <Responsibilities
          number="1"
          formStatus={formStatus}
          companyResponsibilitiesField={formFields.Company1Responsibilities}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
