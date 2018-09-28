import moment from "moment";
import React, { Component } from "react";
import "./Notes.css";

const formatTime = "YYYY-MM-DD HH:mm:ss";

class Notes extends Component {
  constructor() {
    super();

    this.state = {
      lastUpdate: moment()
        .format(formatTime)
        .toString()
    };
  }

  componentWillReceiveProps(nextProps) {
    // check if prop notes has changed
    if (this.props.notes !== nextProps.notes) {
      this.setState({
        lastUpdate: moment()
          .format(formatTime)
          .toString()
      });
    }
  }

  render() {
    const { notes } = this.props;

    return (
      <div className="Notes">
        {/* header */}
        <h1>Notes!</h1>

        {/* list notes  */}
        <div>
          {notes.map((note, key) => (
            <li key={key}>
              {note.title} - {note.content}
            </li>
          ))}
        </div>

        {/* show last updated message*/}
        <p>Last Update: {this.state.lastUpdate}</p>
      </div>
    );
  }
}

export default Notes;
