//Error Boundary Only for Class Based But Functional Based Error I am Not Sure?
// Development Mode All Error Uccur
import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some Error Occure</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
