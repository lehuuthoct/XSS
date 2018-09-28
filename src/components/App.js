import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Notes from "./Notes/Notes";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // this.testES6Features();

    const headerInfo = {
      title: "Pomodoro Timer",
      url: "http://localhost:3000"
    };

    return (
      <div className="App">
        <ErrorBoundary>
          <Header {...headerInfo} />

          <Content>
            {/* <Home /> */}
            {/* <Todo /> */}
            {/* <Timer /> */}
            {/* <Coins /> */}
            <Notes />
          </Content>

          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
