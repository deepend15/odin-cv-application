import "../styles/ResumeDisplay.css";

export default function ResumeDisplay({ formFields, handleEdit }) {
  const schoolIdsArray = formFields.Education.childIds;
  const companyIdsArray = formFields.Experience.childIds;

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
          {schoolIdsArray.map((id) => {
            const formFieldArray = Object.entries(formFields);
            function getField(string) {
              const targetedFieldArray = formFieldArray.filter(
                (field) => field[1].id === id + string
              );
              const targetedFieldName = targetedFieldArray[0][0];
              return formFields[targetedFieldName];
            }
            const schoolDegreeField = getField("Degree");
            let resumeDegreeValue;
            schoolDegreeField.value === "diploma"
              ? (resumeDegreeValue = "Diploma / GED")
              : schoolDegreeField.value === "associate"
              ? (resumeDegreeValue = "Associate's Degree")
              : schoolDegreeField.value === "bachelor"
              ? (resumeDegreeValue = "Bachelor's Degree")
              : schoolDegreeField.value === "master"
              ? (resumeDegreeValue = "Master's Degree / Equivalent")
              : (resumeDegreeValue = "Doctorate / Equivalent");

            return (
              <div key={id}>
                <h3>{getField("Name").value}</h3>
                <p>{getField("Location").value}</p>
                <p>
                  {getField("StartMonth").value} {getField("StartYear").value} -{" "}
                  {getField("EndMonth").value} {getField("EndYear").value}
                </p>
                <p>
                  {resumeDegreeValue}
                  {schoolDegreeField.value !== "diploma" && (
                    <>: {getField("FieldOfStudy").value}</>
                  )}
                </p>
              </div>
            );
          })}
        </section>
        <section className="experience-section">
          <h2>Work Experience</h2>
          {companyIdsArray.map((id) => {
            const formFieldArray = Object.entries(formFields);
            function getField(string) {
              const targetedFieldArray = formFieldArray.filter(
                (field) => field[1].id === id + string
              );
              const targetedFieldName = targetedFieldArray[0][0];
              return formFields[targetedFieldName];
            }

            return (
              <div key={id}>
                <h3>{getField("Name").value}</h3>
                <p>{getField("Location").value}</p>
                <p className="position-title">{getField("Position").value}</p>
                <p className="work-year">
                  {getField("StartMonth").value} {getField("StartYear").value} -{" "}
                  {getField("EndMonth").value} {getField("EndYear").value}
                </p>
                <pre>{getField("Responsibilities").value}</pre>
              </div>
            );
          })}
        </section>
      </main>
      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
    </>
  );
}
