import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class ErrorBoundary extends React.Component {
    
	// state = {
	// 	error: null
	// }
	
	// static getDerivedStateFromError(error) {
	// 	// Update state so next render shows fallback UI.
	// 	return { error: error };
	// }
	
	// componentDidCatch(error, info) {
	// 	// Log the error to an error reporting service
	// 	this.logErrorToServices(error.toString(), info.componentStack)
	// }
	// // A fake logging service 😬
	// logErrorToServices = console.log
	
	// render() {
	// 	if (this.state.error) {
	// 		// You can render any custom fallback UI
	// 		return <p>Something broke</p>;
	// 	}
	// 	return this.props.children;
	// }
	
	constructor(props) {
		super(props);
		
		this.state = this.state = {
		   hasError : false,
		   error    : null,
		   info     : null
		};
	}

	componentDidCatch(error, info) {
		console.log(error, info);
		// Catch errors in any components below and re-render with error message
		this.setState({ 
			hasError : true, 
			error    : error,
			info     : info
		});
		// You can also log error messages to an error reporting service here
	}

    render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1>Oops!!! Something went wrong</h1>
					<p>The error: {this.state.error.toString()}</p>
					<p>Where it occured: {this.state.info.componentStack}</p>
				</div> 
			);       
		} else {
			return this.props.children;
		}
	}
}