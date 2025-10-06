import MonthAndYear from "./MonthAndYear";

export default function Education() {
  return (
    <fieldset>
      <legend>Education</legend>
      <p>
        <label htmlFor="school1">Name of School:</label>
        <input type="text" id="school1" name="school1" required />
      </p>
      <p>
        <label htmlFor="school1Location">Location:</label>
        <input
          type="text"
          id="school1Location"
          name="school1Location"
          required
        />
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
        <label htmlFor="fieldOfStudy">Field of study:</label>
        <input type="text" id="fieldOfStudy" name="fieldOfStudy" required />
      </p>
    </fieldset>
  );
}
