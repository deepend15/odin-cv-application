import Name from "./Name";
import Email from "./Email";

export default function General() {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name />
      </p>
      <p>
        <Email />
      </p>
      <p>
        <label htmlFor="phone">Phone number:</label>
        <input type="tel" id="phone" name="phone" required />
      </p>
    </fieldset>
  );
}
