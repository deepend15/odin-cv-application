import "../styles/App.css";
import Form from "./Form";

function App() {
  return (
    <>
      <h1>Resume Builder</h1>
      <p className="required-line">*All fields are required*</p>
      <Form />
    </>
  );
}

export default App;
