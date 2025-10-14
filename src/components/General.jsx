import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

export default function General({ formFields, handleChange, handleBlur }) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          nameField={formFields.Name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Email
          emailField={formFields.Email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Phone
          phoneField={formFields.Phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
