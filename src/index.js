import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// init root component
const rootComponent = document.getElementById("root");

// hide unmount message
const msgNode = document.getElementById("unmountMessage");
msgNode.style.display = "none";

// init unmount button
const unmountBtn = document.getElementById("unmount");
function unmount() {
  ReactDOM.unmountComponentAtNode(rootComponent);
  msgNode.style.display = "block";
  unmountBtn.style.display = "none";
}
unmountBtn.addEventListener("click", unmount);

ReactDOM.render(<App />, rootComponent);
registerServiceWorker();
