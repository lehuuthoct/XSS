import React, { Component } from "react";
import "./App.css";
import Chart from "./Chart/Chart";
import ErrorBoundary from "./ErrorBoundary";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { NoteList2 } from "./Notes/data";

class App extends Component {
  constructor(props) {
    super(props);

    // Note Application
    // this.state = {
    //   notes: NoteList1
    // };

    this.state = {
      chartType: "line"
    };
    this.columns = [
      ["BTC", 3000, 6000, 10000, 15000, 13000, 11000],
      ["ETH", 2000, 3000, 5000, 4000, 3000, 940],
      ["XRP", 100, 200, 300, 500, 400, 300]
    ];
  }

  componentDidMount() {
    //   Note Application
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
            {/* <Notes notes={this.state.notes} /> */}
            <Chart />
          </Content>

          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
