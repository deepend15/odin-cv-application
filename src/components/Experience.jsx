import CompanyName from "./CompanyName";
import CompanyLocation from "./CompanyLocation";
import Month from "./Month";
import Year from "./Year";
import Position from "./Position";
import Responsibilities from "./Responsibilities";

export default function Experience({
  formStatus,
  formFields,
  handleChange,
  handleBlur,
  handleAddSchoolOrWork,
}) {
  const companyIdsArray = formFields.Experience.childIds;

  return (
    <fieldset>
      <legend>Work Experience</legend>
      {companyIdsArray.map((id) => {
        const formFieldArray = Object.entries(formFields);
        function getField(string) {
          const targetedFieldArray = formFieldArray.filter(
            (field) => field[1].id === id + string
          );
          const targetedFieldName = targetedFieldArray[0][0];
          return formFields[targetedFieldName];
        }
        const companyStartMonth = getField("StartMonth");
        const companyStartYear = getField("StartYear");
        const companyEndMonth = getField("EndMonth");
        const companyEndYear = getField("EndYear");

        return (
          <div className="school-company-block" key={id}>
            <p>
              <CompanyName
                number={id.slice(7)}
                formStatus={formStatus}
                companyNameField={getField("Name")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            <p>
              <CompanyLocation
                number={id.slice(7)}
                formStatus={formStatus}
                companyLocationField={getField("Location")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            <div className="year-line">
              <span>Years Worked:</span>
              <div>
                <div className="month-and-year">
                  <Month
                    type={id + "Start"}
                    value={companyStartMonth.value}
                    handleChange={handleChange}
                  />
                  <Year
                    type={id + "Start"}
                    formStatus={formStatus}
                    value={companyStartYear.value}
                    status={companyStartYear.status}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
                <span>to</span>
                <div className="month-and-year">
                  <Month
                    type={id + "End"}
                    value={companyEndMonth.value}
                    handleChange={handleChange}
                  />
                  <Year
                    type={id + "End"}
                    formStatus={formStatus}
                    value={companyEndYear.value}
                    status={companyEndYear.status}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
            <p>
              <Position
                number={id.slice(7)}
                formStatus={formStatus}
                companyPositionField={getField("Position")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
            <p className="responsibilities-line">
              <Responsibilities
                number={id.slice(7)}
                formStatus={formStatus}
                companyResponsibilitiesField={getField("Responsibilities")}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </p>
          </div>
        );
      })}
      <button
        type="button"
        className="add-button"
        onClick={handleAddSchoolOrWork}
      >
        + Add Company
      </button>
    </fieldset>
  );
}
