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

  function checkValidity(e) {
    if (!(e.target.id === "email" || e.target.id.endsWith("Year"))) {
      let setTargetIsValid;
      switch (e.target.id) {
        case "name":
          setTargetIsValid = setNameIsValid;
          break;
        case "phone":
          setTargetIsValid = setPhoneIsValid;
          break;
      }

      if (e.target.validity.valueMissing) {
        setTargetIsValid(false);
        e.target.classList.add("invalid");
      } else {
        setTargetIsValid(true);
        e.target.classList.remove("invalid");
      }
    }

    if (e.target.id === "email") {
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
  }

  function handleNameChange(e) {
    setNameValue(e.target.value);
    setNameValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkValidity(e);
    }
  }

  function handleNameBlur(e) {
    if (nameValueChanged) checkValidity(e);
  }

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
    setEmailValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkValidity(e);
    }
  }

  function handleEmailBlur(e) {
    if (emailValueChanged) checkValidity(e);
  }

  function handlePhoneChange(e) {
    setPhoneValue(e.target.value);
    setPhoneValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkValidity(e);
    }
  }

  function handlePhoneBlur(e) {
    if (phoneValueChanged) checkValidity(e);
  }

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
