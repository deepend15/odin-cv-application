import Name from "./Name";
import Phone from "./Phone";
import Email from "./Email";

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
        <Email
          value={emailValue}
          status={emailStatus}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Phone
          value={phoneValue}
          isValid={phoneIsValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
