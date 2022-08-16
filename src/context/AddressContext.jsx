import React, { Component } from 'react';

// Set Up The Initial Context
export  const AddressContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AddressConsumer = AddressContext.Consumer;


// Create the provider using a traditional React.Component class
class AddressProvider extends Component {
    state = {locality:"Kalgavhan", TQ:"Anjangaon", Dist: "Amravati" };
    render () {
        return (
        // value prop is where we define what values 
        // that are accessible to consumer components
            <AddressContext.Provider value={this.state}>
                {this.props.children}
                {console.log('this.props in address ',this.props.children.props.children)} {/*all Route component*/} 
            </AddressContext.Provider>
        )
    }
  }
  export default AddressProvider