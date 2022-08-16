import React, { Component } from 'react';

// Set Up The Initial Context
export const NameContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const NameConsumer = NameContext.Consumer;


// Create the provider using a traditional React.Component class
// Updating context is not much different than updating regular state. 
// We can create a wrapper class that contains the state of Context and the means to update it.
class NameProvider extends Component 
{
    // Context state
    state = { name : {firstName : "Chetan", lastName : "Korde"} };
    
    // Method to update state
    setName = (name) => {
        this.setState((prevState) => ({ name }))
    }

    render () {
        const { children } = this.props;
        const { name } = this.state;
        const { setName } = this;

        return (
            // value prop is where we define what values 
            // that are accessible to consumer components
            <NameContext.Provider  
            value={{
                name,
                setName,
            }}>
            {children} {/* {this.props.children}can have one element, multiple elements, or none at all, its value is respectively a single child node, an array of child nodes or undefined.  */}
            </NameContext.Provider>
        )
    }
}
export default NameProvider;
