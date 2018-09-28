import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// hide unmount message
document.getElementById("unmountMessage").style.display = "none";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
