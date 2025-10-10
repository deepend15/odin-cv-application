import "../styles/Form.css";
import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function Form() {
  const [nameValue, setNameValue] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [nameValueChanged, setNameValueChanged] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailStatus, setEmailStatus] = useState("valid");
  const [emailValueChanged, setEmailValueChanged] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [phoneValueChanged, setPhoneValueChanged] = useState(false);

  function checkNameValidity(e) {
    if (e.target.validity.valueMissing) {
      setNameIsValid(false);
      e.target.classList.add("invalid");
    } else {
      setNameIsValid(true);
      e.target.classList.remove("invalid");
    }
  }

  function handleNameChange(e) {
    setNameValue(e.target.value);
    setNameValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkNameValidity(e);
    }
  }

  function handleNameBlur(e) {
    if (nameValueChanged) checkNameValidity(e);
  }

  function checkEmailValidity(e) {
    if (e.target.validity.valueMissing) {
      setEmailStatus("missing");
      e.target.classList.add("invalid");
    } else if (e.target.validity.typeMismatch) {
      setEmailStatus("invalid");
      e.target.classList.add("invalid");
    } else {
      setEmailStatus("valid");
      e.target.classList.remove("invalid");
    }
  }

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
    setEmailValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkEmailValidity(e);
    }
  }

  function handleEmailBlur(e) {
    if (emailValueChanged) checkEmailValidity(e);
  }

  function checkPhoneValidity(e) {
    if (e.target.validity.valueMissing) {
      setPhoneIsValid(false);
      e.target.classList.add("invalid");
    } else {
      setPhoneIsValid(true);
      e.target.classList.remove("invalid");
    }
  }

  function handlePhoneChange(e) {
    setPhoneValue(e.target.value);
    setPhoneValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkPhoneValidity(e);
    }
  }

  function handlePhoneBlur(e) {
    if (phoneValueChanged) checkPhoneValidity(e);
  }

  //   function checkValidity(e) {

  //   }

  return (
    <form action="" method="">
      <General
        nameValue={nameValue}
        nameIsValid={nameIsValid}
        handleNameChange={handleNameChange}
        handleNameBlur={handleNameBlur}
        emailValue={emailValue}
        emailStatus={emailStatus}
        handleEmailChange={handleEmailChange}
        handleEmailBlur={handleEmailBlur}
        phoneValue={phoneValue}
        phoneIsValid={phoneIsValid}
        handlePhoneChange={handlePhoneChange}
        handlePhoneBlur={handlePhoneBlur}
      />
      <Education />
      <Experience />
      <button>Submit</button>
    </form>
  );
}
