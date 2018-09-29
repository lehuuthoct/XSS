import React, { Component } from "react";

const responses = [
  { id: 1, title: "blog 1", content: "<p>learn <strong> React </strong> </p>" },
  {
    id: 2,
    title: "blog 2",
    content: `<p>Alert: <script>alert('ok')</script> </p>`
  },
  {
    id: 3,
    title: "blog 3",
    content: `<img onmouseover="alert('not secure')" src="attack.jpg"/>`
  }
];
class XSS extends Component {
  render() {
    return <div>XSS</div>;
  }
}

export default XSS;
