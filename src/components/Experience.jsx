import CompanyName from "./CompanyName";
import CompanyLocation from "./CompanyLocation";
import MonthAndYear from "./MonthAndYear";
import Position from "./Position";
import Responsibilities from "./Responsibilities";

export default function Experience() {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <p>
        <CompanyName number="1" />
      </p>
      <p>
        <CompanyLocation number="1" />
      </p>
      <div className="year-line">
        <span>Years Worked:</span>
        <div>
          <MonthAndYear type="company1Start" />
          <span>to</span>
          <MonthAndYear type="company1End" />
        </div>
      </div>
      <p>
        <Position number="1" />
      </p>
      <p className="responsibilities-line">
        <Responsibilities number="1" />
      </p>
    </fieldset>
  );
}
