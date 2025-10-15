import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

export default function General({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
}) {
  let className;
  formStatus === "submitted"
    ? (className = "submitted-form-line")
    : (className = "");

  return (
    <fieldset>
      <legend>General</legend>
      <p className={className}>
        <Name
          formStatus={formStatus}
          nameField={formFields.Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={className}>
        <Email
          formStatus={formStatus}
          emailField={formFields.Email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p className={className}>
        <Phone
          formStatus={formStatus}
          phoneField={formFields.Phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
