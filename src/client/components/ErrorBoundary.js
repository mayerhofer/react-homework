import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: undefined, errorInfo: undefined };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true, error: error, errorInfo: info });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div>
                <h1 style={{ color:'yellow' }}>{this.props.message}</h1>
                <details style={{ whiteSpace: 'pre-wrap', color:'yellow' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                </details>
            </div>
        );
      }
      return this.props.children;
    }
}

ErrorBoundary.propTypes = {
  message: PropTypes.string.isRequired
};

ErrorBoundary.defaultProps = {
  message: 'Sorry. This component crashed.'
};

export default ErrorBoundary;