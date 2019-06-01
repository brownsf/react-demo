import React from "react";
import ReactDOM from "react-dom";
import ClassesDemo from "./components/ClassesDemo";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ClassesDemo country="US" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
