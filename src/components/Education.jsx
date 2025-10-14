import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import Month from "./Month";
import Year from "./Year";
import Degree from "./Degree";
import FieldOfStudy from "./FieldOfStudy";

export default function Education({ formFields, handleChange, handleBlur }) {
  return (
    <fieldset>
      <legend>Education</legend>
      <p>
        <SchoolName
          number="1"
          schoolNameField={formFields.School1Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <SchoolLocation
          number="1"
          schoolLocationField={formFields.School1Location}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
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
              value={formFields.School1EndYear.value}
              status={formFields.School1EndYear.status}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
        </div>
      </div>
      <p>
        <Degree
          number="1"
          schoolDegreeField={formFields.School1Degree}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <FieldOfStudy
          number="1"
          schoolFieldOfStudyField={formFields.School1FieldOfStudy}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
