import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//Line 5 is responsible for calling the whole application into the action

// ==================================================|
// ReactDOM.render(React.createElement(App, null),
//     document.getElementById("root"));
// ==================================================|