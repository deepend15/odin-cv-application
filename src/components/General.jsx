import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

export default function General({ formFields, handleChange, handleBlur }) {
  return (
    <fieldset>
      <legend>General</legend>
      <p>
        <Name
          value={formFields.Name.value}
          isValid={formFields.Name.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Email
          value={formFields.Email.value}
          status={formFields.Email.status}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
      <p>
        <Phone
          value={formFields.Phone.value}
          isValid={formFields.Phone.isValid}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </p>
    </fieldset>
  );
}
