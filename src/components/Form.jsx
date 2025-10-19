import "../styles/Form.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function Form({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
  handleSubmit,
  handleAddSchoolOrWork,
  handleDeleteSchoolOrWork,
}) {
  return (
    <>
      <p className="required-line">*All fields are required*</p>
      {formStatus === "invalid" && (
        <p>***Please correct the errors indicated below***</p>
      )}
      <form action="" method="">
        <General
          formStatus={formStatus}
          formFields={formFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Education
          formStatus={formStatus}
          formFields={formFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleAddSchoolOrWork={handleAddSchoolOrWork}
          handleDeleteSchoolOrWork={handleDeleteSchoolOrWork}
        />
        <Experience
          formStatus={formStatus}
          formFields={formFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleAddSchoolOrWork={handleAddSchoolOrWork}
          handleDeleteSchoolOrWork={handleDeleteSchoolOrWork}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}
