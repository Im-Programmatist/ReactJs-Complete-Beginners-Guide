import React, { Component, useRef, forwardRef, } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import Child from './Child';


export default class LazyLoading extends Component {
    
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.inputRef = React.createRef();
    }

    handleClick() {
        console.warn("Handle click..");
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return (
            <div>
                Lazi Loading Component
                <h1 onClick={this.handleClick}>{this.state.counter}</h1>
                <ErrorBoundary>
                    <BuggyCounter />
                </ErrorBoundary>
                <h1>Forward Ref</h1>
                <Child ref={this.inputRef}/>
                <button onClick={() => {this.inputRef.current.focus()}}>Update Input</button>
            </div>
        )
    }
}


class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(({counter}) => ({
            counter: counter + 1
        }));
    }
    
    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}
  
