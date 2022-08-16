import React, { useContext } from 'react';
import styled from 'styled-components';
import contextpic from './images/contexthierarchy.jpg';

//get context from declaration file
import { AddressContext, AddressConsumer } from './context/AddressContext';
import { NameContext, NameConsumer } from './context/NameContext';

//redux
import {useSelector, useDispatch} from 'react-redux';

const Pre = styled.pre`
    font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    margin-bottom: 10px;
    overflow: auto;
    width: auto;
    padding: 5px;
    background-color: #eee;
    width: 650px!ie7;
    padding-bottom: 20px!ie7;
    max-height: 600px;
  `;



export const ContextApi = () => {

    //Redux state
    const myState = useSelector((state) => {console.log(state); return state.changeNumber});
    console.log('redux state myState - ', myState);

    //Using useCOntext Hook -get values of Name & Address Context from app file
    const nameContext = useContext(NameContext); //We get name object value which is pass from app file
    const addressContext = useContext(AddressContext); //We get address object value which is pass from app file
    //We can directly use this nameContext & addressContext like nameContext.firstName & addressContext.locality any where.
    return(
        <>       
       
        <h3>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h3>
        <h4><a href="https://www.toptal.com/react/react-context-api"> Example With Class Component </a></h4>
        <ul>
            <li>1. In one way we can pass context in hierarchy, from compo  A to B then C</li>
        </ul>
        <img src={contextpic} alt="context_passing_hierarchy" width="40%" height="auto"/>
        <ul>
            <li> Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</li>
            <li> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. </li>
            <li> Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</li>
            <li><b>1. Create Context (import context in react ), <br/>2. Declaire COntext And Set Provider & within the provider put your component, <br/>3. Import declaration file in required component and use Consumer to get value.</b></li>
            <li>
                <AddressConsumer> 
                    { ({locality,TQ,Dist}) => {
                        return (
                            <NameConsumer> 
                                { ({name}) => {
                                    return (<h1 style={{color:"red"}}> My name is {name.firstName} {name.lastName}. & Address is {locality}, {TQ}, {Dist}</h1>);
                                }}
                            </NameConsumer> 
                        );                   
                    }} 
                </AddressConsumer>
            </li>
        </ul>
        <button
            onClick={() => {
                const newName = { firstName: 'Hero', lastName: 'No.1' };
                nameContext.setName(newName)
            }}
            >
            Update Name
        </button>
        <Pre>
            {` 
                1. Import and declaration & export
                import React, { createContext } from 'react';
                &
                //for context example
                const Name = createContext();
            
                //we have to export all the contex
                export {Name};

                2. Provider and set value
                <Name.Provider value={{firstName : "Chetan", lastName : "Korde"}}>
                    <Route path="/contextapi" component={ContextApi} />
                </Name.Provider>

                3. Consumer
                //get context from declaration file
                import { Name, Address } from "./App";

                <Name.Consumer> 
                { (context) => {
                        return (
                            <Address.Consumer> 
                                { (addContext) => {
                                    return (<h1 style={{color:"red"}}> My name is {context.firstName} {context.lastName}. & Address is {addContext.locality}, {addContext.TQ}, {addContext.Dist}</h1>);
                                }}
                            </Address.Consumer> 
                        );                   
                    }} 
                </Name.Consumer>
            `}
        </Pre>
        <br/>
        <h2> Use Context Hook -</h2>
        <ul>
            <li>React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.</li>
            <li>Context can make a nice simple alternative to Redux when your data is simple or your app is small.</li>
            <li>The useContext hook is a little different though: It just makes things nicer.</li>
            <li>Consumer Adds Extra Nesting, (return inside return for every context in above example), to avoid that nesting we use useContext Hooks.</li>
            <li>We can directly use this nameContext & addressContext like nameContext.firstName & addressContext.locality any where.</li>
            <li>`{nameContext.name.firstName} {nameContext.name.lastName} {addressContext.locality} {addressContext.TQ} `</li>
        </ul>
        <br/>
        </> 
    );

};
