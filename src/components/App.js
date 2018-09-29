import React, { Component } from "react";
import Animation from "./Animation/Animation";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

class App extends Component {
  constructor(props) {
    super(props);

    // Note Application
    this.state = {
      //   notes: NoteList1
    };
  }

  /*  componentDidMount() {
    //   Note Application
    //   add noteList2 after 10s
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...NoteList2]
      });
    }, 5000);
  } */

  componentWillUnmount() {
    console.log("unmount Root component");
    document.body.style = "background: deeppink; text-align: center";
    document.getElementById("unmountMessage").style.color = "white";
  }

  render() {
    // this.testES6Features();

    const headerInfo = {
      //   title: "Notes Application",
      //   title: "Chart Application",
      title: "Animation Application",
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
            {/* <Notes notes={this.state.notes} /> */}
            {/* <ChartContainer /> */}
            <Animation />
          </Content>

          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
