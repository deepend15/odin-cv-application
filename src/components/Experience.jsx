import CompanyName from "./CompanyName";
import CompanyLocation from "./CompanyLocation";
import Month from "./Month";
import Year from "./Year";
import Position from "./Position";
import Responsibilities from "./Responsibilities";

export default function Experience({ formFields, handleChange, handleBlur }) {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <p>
        <CompanyName
          number="1"
          value={formFields.Company1Name.value}
          isValid={formFields.Company1Name.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <CompanyLocation
          number="1"
          value={formFields.Company1Location.value}
          isValid={formFields.Company1Location.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
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
              value={formFields.Company1EndYear.value}
              status={formFields.Company1EndYear.status}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>
        </div>
      </div>
      <p>
        <Position
          number="1"
          value={formFields.Company1Position.value}
          isValid={formFields.Company1Position.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className="responsibilities-line">
        <Responsibilities
          number="1"
          value={formFields.Company1Responsibilities.value}
          isValid={formFields.Company1Responsibilities.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
