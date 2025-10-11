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
  const [schoolNameValue, setSchoolNameValue] = useState("");
  const [schoolNameIsValid, setSchoolNameIsValid] = useState(true);
  const [schoolNameValueChanged, setSchoolNameValueChanged] = useState(false);

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

      if (e.target.id.startsWith("school") && e.target.id.endsWith("Name")) {
        setTargetIsValid = setSchoolNameIsValid;
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

  function handleChange(e) {
    let setTargetValue;
    let setTargetValueChanged;

    switch (e.target.id) {
      case "name":
        setTargetValue = setNameValue;
        setTargetValueChanged = setNameValueChanged;
        break;
      case "email":
        setTargetValue = setEmailValue;
        setTargetValueChanged = setEmailValueChanged;
        break;
      case "phone":
        setTargetValue = setPhoneValue;
        setTargetValueChanged = setPhoneValueChanged;
        break;
    }

    if (e.target.id.startsWith("school") && e.target.id.endsWith("Name")) {
      setTargetValue = setSchoolNameValue;
      setTargetValueChanged = setSchoolNameValueChanged;
    }

    setTargetValue(e.target.value);
    setTargetValueChanged(true);
    if (e.target.classList.contains("invalid")) {
      checkValidity(e);
    }
  }

  function handleBlur(e) {
    let targetValueChanged;

    switch (e.target.id) {
      case "name":
        targetValueChanged = nameValueChanged;
        break;
      case "email":
        targetValueChanged = emailValueChanged;
        break;
      case "phone":
        targetValueChanged = phoneValueChanged;
        break;
    }

    if (e.target.id.startsWith("school") && e.target.id.endsWith("Name")) {
      targetValueChanged = schoolNameValueChanged;
    }

    if (targetValueChanged) checkValidity(e);
  }

  return (
    <form action="" method="">
      <General
        nameValue={nameValue}
        nameIsValid={nameIsValid}
        emailValue={emailValue}
        emailStatus={emailStatus}
        phoneValue={phoneValue}
        phoneIsValid={phoneIsValid}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Education
        schoolNameValue={schoolNameValue}
        schoolNameIsValid={schoolNameIsValid}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <Experience />
      <button>Submit</button>
    </form>
  );
}
