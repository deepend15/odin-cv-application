import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

export default function General({
  nameValue,
  nameIsValid,
  emailValue,
  emailStatus,
  phoneValue,
  phoneIsValid,
  handleChange,
  handleBlur,
}) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          value={nameValue}
          isValid={nameIsValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
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
