import PropTypes from 'prop-types';
import React from 'react';
import logo from '../../shared/images/logo.svg';

const Header = props => {

  const { title, url } = props;
  return (
    <header className="App-header">
      <img src={ logo } className="App-logo" alt="logo" />

      <div className='App-Title'>
        <a href={ url }> { title } </a>
      </div>
    </header>
  )
}
// Failed prop type: The prop `title` is marked as required in `Header`, but its value is `undefined`.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}
export default Header;

/*  new features React 16.4.2
// Example 1: Returning an array of elements.
render() {
  // Now you don't need to wrap list items in an extra element
  return [
    <li key="1">First item</li>,
    <li key="2">Second item</li>,
    <li key="3">Third item</li>,
  ];
}

// Example 2: Returning a string
render() {
  return 'Hello World!';
}

// Example 1: Using empty tags <></>
render() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </>
  );
}

// Example 2: Using React.Fragment
render() {
  return (
    <React.Fragment>
      <h1>An h1 heading</h1>
      Some text here.
      <h2>An h2 heading</h2>
      More text here.
      Even more text here.
    </React.Fragment>
  );
}

// Example 3: Importing Fragment
import React, { Fragment } from 'react';
...
render() {
  return (
    <Fragment>
      <h1>An h1 heading</h1>
      Some text here.
      <h2>An h2 heading</h2>
      More text here.
      Even more text here.
    </Fragment>
  );
 
*/
