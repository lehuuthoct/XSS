import React, { Component } from "react";
import serialize from "serialize-javascript";

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

// init initial state of redux
// const initialState = JSON.stringify(responses);
const initialState = serialize(responses);

// remove html tags
const removeXSSAttacks = html => {
  // init pattern
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  // remove <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  }

  // remove events tags
  html = html.replace(/on\w+="[^"]*/g, "");

  return {
    __html: html
  };
};

class XSS extends Component {
  render() {
    // parsed response
    console.log("stringified state [string]", initialState);

    const posts = JSON.parse(initialState);
    console.log("parsed posts ", posts);

    return (
      <div className="XSS">
        XSS
        {posts.map((
          blog,
          key // title
        ) => (
          <div key={key}>
            <h4> {blog.title} </h4>
            {/* secure code */}
            <p>
              <strong>{blog.content}</strong>
            </p>
            {/* insecure code */}
            <p dangerouslySetInnerHTML={removeXSSAttacks(blog.content)} />
          </div>
        ))}
      </div>
    );
  }
}

export default XSS;
