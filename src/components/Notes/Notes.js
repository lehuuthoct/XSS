import React, { Component } from "react";

class Notes extends Component {
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
        <p>Last Update: </p>
      </div>
    );
  }
}

export default Notes;
