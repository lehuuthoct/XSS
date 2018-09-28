import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import fake data
import { NoteList1 } from "./Notes/data";
import Notes from "./Notes/Notes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: NoteList1
    };
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
            <Notes notes={this.state.notes} />
          </Content>

          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
