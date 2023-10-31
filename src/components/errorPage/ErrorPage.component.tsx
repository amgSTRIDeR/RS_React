import React from 'react';
import './ErrorPage.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="errorPage">
        <h1 className="errorPage__title">
          I am not in control of that situation at all!
        </h1>
        <img
          onClick={() => window.location.reload()}
          className="errorPage__image"
          src="/20-minutes-adventure-after.gif"
          alt=""
        />
        <p className="errorPage__text">^^^ Start over in a new universe? ^^^</p>
      </div>
    );
  }
}

export default ErrorPage;
