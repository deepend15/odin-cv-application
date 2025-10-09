import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import Month from "./Month";
import Year from "./Year";
import Degree from "./Degree";
import FieldOfStudy from "./FieldOfStudy";

export default function Education() {
  return (
    <fieldset>
      <legend>Education</legend>
      <p>
        <SchoolName number="1" />
      </p>
      <p>
        <SchoolLocation number="1" />
      </p>
      <div className="year-line">
        <span>Years Attended:</span>
        <div>
          <div className="month-and-year">
            <Month type="school1Start" />
            <Year type="school1Start" />
          </div>
          <span>to</span>
          <div className="month-and-year">
            <Month type="school1End" />
            <Year type="school1End" />
          </div>
        </div>
      </div>
      <p>
        <Degree number="1" />
      </p>
      <p>
        <FieldOfStudy number="1" />
      </p>
    </fieldset>
  );
}
