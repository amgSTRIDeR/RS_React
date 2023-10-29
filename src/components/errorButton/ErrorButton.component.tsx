import React from 'react';
import { ErrorButtonProps } from '../../shared/interfaces';
import './ErrorButton.css';

class ErrorButton extends React.Component<ErrorButtonProps> {
  constructor(props: ErrorButtonProps) {
    super(props);
  }

  render() {
    return (
      <div
        className="errorButton__container"
        onClick={this.props.showTestError}
      >
        <img
          className="errorButton__image"
          src="/20-minutes-adventure-before.gif"
          alt=""
        />
        <p className="errorButton__text">
          &#x2191; click to error test &#x2191;
        </p>
      </div>
    );
  }
}

export default ErrorButton;
