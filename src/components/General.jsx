import Name from "./Name";
import Phone from "./Phone";
import Email from "./Email";

export default function General({
  nameValue,
  nameIsValid,
  handleNameChange,
  handleNameBlur,
  emailValue,
  emailStatus,
  handleEmailChange,
  handleEmailBlur,
  phoneValue,
  phoneIsValid,
  handlePhoneChange,
  handlePhoneBlur,
}) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          value={nameValue}
          isValid={nameIsValid}
          handleChange={handleNameChange}
          handleBlur={handleNameBlur}
        />
      </p>
      <p>
        <Email
          value={emailValue}
          status={emailStatus}
          handleChange={handleEmailChange}
          handleBlur={handleEmailBlur}
        />
      </p>
      <p>
        <Phone
          value={phoneValue}
          isValid={phoneIsValid}
          handleChange={handlePhoneChange}
          handleBlur={handlePhoneBlur}
        />
      </p>
    </fieldset>
  );
}
