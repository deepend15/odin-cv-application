import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import Month from "./Month";
import Year from "./Year";
import Degree from "./Degree";
import FieldOfStudy from "./FieldOfStudy";

export default function Education({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
}) {
  let className;
  formStatus === "submitted"
    ? (className = "submitted-form-line")
    : (className = "");

  return (
    <fieldset>
      <legend>Education</legend>
      <p className={className}>
        <SchoolName
          number="1"
          formStatus={formStatus}
          schoolNameField={formFields.School1Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={className}>
        <SchoolLocation
          number="1"
          formStatus={formStatus}
          schoolLocationField={formFields.School1Location}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      {formStatus !== "submitted" && (
        <div className="year-line">
          <span>Years Attended:</span>
          <div>
            <div className="month-and-year">
              <Month
                type="school1Start"
                value={formFields.School1StartMonth.value}
                handleChange={handleChange}
              />
              <Year
                type="school1Start"
                formStatus={formStatus}
                value={formFields.School1StartYear.value}
                status={formFields.School1StartYear.status}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <span>to</span>
            <div className="month-and-year">
              <Month
                type="school1End"
                value={formFields.School1EndMonth.value}
                handleChange={handleChange}
              />
              <Year
                type="school1End"
                formStatus={formStatus}
                value={formFields.School1EndYear.value}
                status={formFields.School1EndYear.status}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      )}
      {formStatus === "submitted" && (
        <p className={className}>
          <span className="submitted-form-field-name">Years Attended:</span>
          <span>
            {formFields.School1StartMonth.value}{" "}
            {formFields.School1StartYear.value} -{" "}
            {formFields.School1EndMonth.value} {formFields.School1EndYear.value}
          </span>
        </p>
      )}
      <p className={className}>
        <Degree
          number="1"
          formStatus={formStatus}
          schoolDegreeField={formFields.School1Degree}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={className}>
        <FieldOfStudy
          number="1"
          formStatus={formStatus}
          schoolFieldOfStudyField={formFields.School1FieldOfStudy}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
