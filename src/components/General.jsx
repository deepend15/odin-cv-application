import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

export default function General({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
}) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          formStatus={formStatus}
          nameField={formFields.Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Email
          formStatus={formStatus}
          emailField={formFields.Email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
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
