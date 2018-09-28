import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, info) {
        // display fallback UI
        this.setState({
            hasError: true
        });

        // log error to error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        // render fallback UI
        if (this.state.hasError) {
            return <h1> Error occurred!</h1>
        }
        return (
            <React.Fragment>
                { this.props.children }
            </React.Fragment>
        )
    }
}

export default ErrorBoundary;