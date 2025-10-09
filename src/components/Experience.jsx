import CompanyName from "./CompanyName";
import CompanyLocation from "./CompanyLocation";
import Month from "./Month";
import Year from "./Year";
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
          <div className="month-and-year">
            <Month type="company1Start" />
            <Year type="company1Start" />
          </div>
          <span>to</span>
          <div className="month-and-year">
            <Month type="company1End" />
            <Year type="company1End" />
          </div>
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
