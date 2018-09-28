import React, { Component } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
// import fake data
import { NoteList1, NoteList2 } from "./Notes/data";
import Notes from "./Notes/Notes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: NoteList1
    };
  }

  componentDidMount() {
    //   add noteList2 after 10s
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...NoteList2]
      });
    }, 5000);
  }

  componentWillUnmount() {
    console.log("unmount Root component");
    document.body.style = "background: deeppink; text-align: center";
    document.getElementById("unmountMessage").style.color = "white";
  }

  render() {
    // this.testES6Features();

    const headerInfo = {
      title: "Notes Application",
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
