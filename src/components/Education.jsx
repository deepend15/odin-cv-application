import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import MonthAndYear from "./MonthAndYear";
import FieldOfStudy from "./FieldOfStudy";

export default function Education() {
  return (
    <fieldset>
      <legend>Education</legend>
      <p>
        <SchoolName number="1" />
      </p>
      <p>
        <SchoolLocation number="1"/>
      </p>
      <div className="year-line">
        <span>Years Attended:</span>
        <div>
          <MonthAndYear type="school1Start" />
          <span>to</span>
          <MonthAndYear type="school1End" />
        </div>
      </div>
      <p>
        <label htmlFor="degree">Degree received:</label>
        <select name="degree" id="degree">
          <option value="">--Select one--</option>
          <option value="diploma">Diploma / GED</option>
          <option value="associate">Associate's</option>
          <option value="bachelor">Bachelor's</option>
          <option value="master">Master's / Equivalent</option>
          <option value="doctorate">Doctorate / Equivalent</option>
        </select>
      </p>
      <p>
        <FieldOfStudy number="1" />
      </p>
    </fieldset>
  );
}
