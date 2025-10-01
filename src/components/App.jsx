// import { useState } from 'react'
import "../styles/App.css";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  return (
    <>
      <h1>Resume Builder</h1>
      <form action="" method="">
        <General />
        <Education />
        <Experience />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
