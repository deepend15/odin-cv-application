import SchoolName from "./SchoolName";
import SchoolLocation from "./SchoolLocation";
import Month from "./Month";
import Year from "./Year";
import Degree from "./Degree";
import FieldOfStudy from "./FieldOfStudy";

export default function Education({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
  handleAddSchoolOrWork,
}) {
  const schoolIdsArray = formFields.Education.childIds;

  return (
    <fieldset>
      <legend>Education</legend>
      {schoolIdsArray.map((id) => {
        const formFieldArray = Object.entries(formFields);
        function getField(string) {
          const targetedFieldArray = formFieldArray.filter(
            (field) => field[1].id === id + string
          );
          const targetedFieldName = targetedFieldArray[0][0];
          return formFields[targetedFieldName];
        }
        const schoolStartMonth = getField("StartMonth");
        const schoolStartYear = getField("StartYear");
        const schoolEndMonth = getField("EndMonth");
        const schoolEndYear = getField("EndYear");
        const schoolDegreeField = getField("Degree");

        return (
          <div className="school-company-block" key={id}>
            <p>
              <SchoolName
                number={id.slice(6)}
                formStatus={formStatus}
                schoolNameField={getField("Name")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            <p>
              <SchoolLocation
                number={id.slice(6)}
                formStatus={formStatus}
                schoolLocationField={getField("Location")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            <div className="year-line">
              <span>Years Attended:</span>
              <div>
                <div className="month-and-year">
                  <Month
                    type={id + "Start"}
                    value={schoolStartMonth.value}
                    handleChange={handleChange}
                  />
                  <Year
                    type={id + "Start"}
                    formStatus={formStatus}
                    value={schoolStartYear.value}
                    status={schoolStartYear.status}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
                <span>to</span>
                <div className="month-and-year">
                  <Month
                    type={id + "End"}
                    value={schoolEndMonth.value}
                    handleChange={handleChange}
                  />
                  <Year
                    type={id + "End"}
                    formStatus={formStatus}
                    value={schoolEndYear.value}
                    status={schoolEndYear.status}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <p>
              <Degree
                number={id.slice(6)}
                formStatus={formStatus}
                schoolDegreeField={schoolDegreeField}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            {schoolDegreeField.value !== "" &&
              schoolDegreeField.value !== "diploma" && (
                <p>
                  <FieldOfStudy
                    number={id.slice(6)}
                    formStatus={formStatus}
                    schoolFieldOfStudyField={getField("FieldOfStudy")}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </p>
              )}
          </div>
        );
      })}
      <button type="button" onClick={handleAddSchoolOrWork}>
        + Add School
      </button>
    </fieldset>
  );
}
