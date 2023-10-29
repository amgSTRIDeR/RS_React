import React from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.component';

class ErrorButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <button onClick={this.props.showTestError}>Click to test Error</button>
      </ErrorBoundary>
    );
  }
}

export default ErrorButton;
