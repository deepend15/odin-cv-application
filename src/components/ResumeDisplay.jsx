import "../styles/ResumeDisplay.css";

export default function ResumeDisplay({ formFields, handleEdit }) {
  let resumeDegreeValue;
  formFields.School1Degree.value === "diploma"
    ? (resumeDegreeValue = "Diploma / GED")
    : formFields.School1Degree.value === "associate"
    ? (resumeDegreeValue = "Associate's Degree")
    : formFields.School1Degree.value === "bachelor"
    ? (resumeDegreeValue = "Bachelor's Degree")
    : formFields.School1Degree.value === "master"
    ? (resumeDegreeValue = "Master's Degree / Equivalent")
    : (resumeDegreeValue = "Doctorate / Equivalent");

  return (
    <>
      <main className="resume">
        <section className="general-section">
          <p>{formFields.Name.value}</p>
          <p>{formFields.Email.value}</p>
          <p>{formFields.Phone.value}</p>
        </section>
        <section className="education-section">
          <h2>Education</h2>
          <h3>{formFields.School1Name.value}</h3>
          <p>{formFields.School1Location.value}</p>
          <p>
            {formFields.School1StartMonth.value}{" "}
            {formFields.School1StartYear.value} -{" "}
            {formFields.School1EndMonth.value} {formFields.School1EndYear.value}
          </p>
          <p>
            {resumeDegreeValue}: {formFields.School1FieldOfStudy.value}
          </p>
        </section>
        <section className="experience-section">
          <h2>Work Experience</h2>
          <h3>{formFields.Company1Name.value}</h3>
          <p>{formFields.Company1Location.value}</p>
          <p>
            {formFields.Company1StartMonth.value}{" "}
            {formFields.Company1StartYear.value} -{" "}
            {formFields.Company1EndMonth.value}{" "}
            {formFields.Company1EndYear.value}
          </p>
          <p>{formFields.Company1Position.value}</p>
          <pre>{formFields.Company1Responsibilities.value}</pre>
        </section>
      </main>
      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
    </>
  );
}
