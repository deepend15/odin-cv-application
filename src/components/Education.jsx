import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import MonthAndYear from "./MonthAndYear";
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
        <Degree number="1" />
      </p>
      <p>
        <FieldOfStudy number="1" />
      </p>
    </fieldset>
  );
}
