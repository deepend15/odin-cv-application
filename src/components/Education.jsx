export default function Education() {
  return (
    <section>
      <fieldset>
        <legend>Education</legend>
        <p>
          <label for="school">Name of School:</label>
          <input type="text" id="school" name="school" required />
        </p>
        <button type="button">OK</button>
      </fieldset>
    </section>
  );
}
