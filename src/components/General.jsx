import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

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
        <Phone />
      </p>
    </fieldset>
  );
}
