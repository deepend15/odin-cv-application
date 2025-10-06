import "../styles/Experience.css";
import MonthAndYear from "./MonthAndYear";

export default function Experience() {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <p>
        <label htmlFor="company1Name">Company Name:</label>
        <input type="text" id="company1Name" name="company1Name" required />
      </p>
      <p>
        <label htmlFor="company1Location">Location:</label>
        <input
          type="text"
          id="company1Location"
          name="company1Location"
          required
        />
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
        <label htmlFor="company1Position">Position Title:</label>
        <input
          type="text"
          id="company1Position"
          name="company1Position"
          required
        />
      </p>
      <p>
        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <textarea name="responsibilities" id="responsibilities" rows="4" cols="35" required></textarea>
      </p>
    </fieldset>
  );
}
