import Name from "./Name";
import Phone from "./Phone";
import Email from "./Email";

export default function General({
  nameValue,
  nameIsValid,
  handleNameBlur,
  emailValue,
  emailStatus,
  handleEmailBlur,
  phoneValue,
  phoneIsValid,
  handleChange,
  handlePhoneBlur,
}) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          value={nameValue}
          isValid={nameIsValid}
          handleChange={handleChange}
          handleBlur={handleNameBlur}
        />
      </p>
      <p>
        <Email
          value={emailValue}
          status={emailStatus}
          handleChange={handleChange}
          handleBlur={handleEmailBlur}
        />
      </p>
      <p>
        <Phone
          value={phoneValue}
          isValid={phoneIsValid}
          handleChange={handleChange}
          handleBlur={handlePhoneBlur}
        />
      </p>
    </fieldset>
  );
}
