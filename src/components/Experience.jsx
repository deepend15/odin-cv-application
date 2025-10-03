import "../styles/Experience.css";
import Years from "./YearsLine";

export default function Experience() {
  return (
    <section>
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
          <Years type="company1Start" />
          <span>through</span>
          <Years type="company1End" />
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
          <textarea name="responsibilities" id="responsibilities"></textarea>
        </p>
      </fieldset>
    </section>
  );
}
