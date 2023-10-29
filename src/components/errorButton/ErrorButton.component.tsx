import React from 'react';
import { ErrorButtonProps } from '../../shared/interfaces';

class ErrorButton extends React.Component<ErrorButtonProps> {
  constructor(props: ErrorButtonProps) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.showTestError}>Click to test Error</button>
    );
  }
}

export default ErrorButton;
