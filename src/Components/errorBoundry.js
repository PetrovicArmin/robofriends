import React, { Component, Fragment } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	errorHappened: false
        };
    }

    componentDidCatch() {
    	this.setState({ errorHappened: true });
    }

    render() {
    	if (this.state.errorHappened)
    		return <h1>This is not good, oops!</h1>;
    	return <Fragment>{this.props.children}</Fragment>;
    }
}

export default ErrorBoundry;
