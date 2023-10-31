import React from 'react';
import { ErrorButtonProps } from '../../shared/interfaces';
import './ErrorButton.css';

class ErrorButton extends React.Component<ErrorButtonProps> {
  constructor(props: ErrorButtonProps) {
    super(props);
  }

  render() {
    return (
      <div className="errorButton__container">
        <img
          onClick={this.props.showTestError}
          className="errorButton__image"
          src="/20-minutes-adventure-before.gif"
          alt=""
        />
        <p className="errorButton__text">
          &#x2191; click to call an error &#x2191;
        </p>
      </div>
    );
  }
}

export default ErrorButton;
