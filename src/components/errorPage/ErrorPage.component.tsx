import React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="errorPage">
        <h1 className="errorPage__title">
          I am not in control of that situation at all!
        </h1>
        <img src="/20-minutes-adventure-after.gif" alt="" />
      </div>
    );
  }
}

export default ErrorPage;
