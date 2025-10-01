export default function Experience() {
  return (
    <section>
      <fieldset>
        <legend>Work Experience</legend>
        <p>
          <label for="company">Company Name:</label>
          <input type="text" id="company" name="company" required />
        </p>
        <button type="button">OK</button>
      </fieldset>
    </section>
  );
}
