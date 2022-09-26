import React, { Component } from 'react';
import reduxImg from './images/redux.jpg';
import reduxFlowImg from './images/reduxFlow.jpg';
//Redux 
import {useSelector, useDispatch} from 'react-redux';
import { inNumber, decNumber } from './actions/index';

export const ReactRedux = () => {
    //Two hooks that allow your React components to interact with the Redux store.
    // useSelector reads a value from the store state and subscribes to updates, 
    // while useDispatch returns the store's dispatch method to let you dispatch actions.
    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    console.log('myState',myState);
    
    return (
        <>
            <ol>
                <li><b>Data flows from top to bottom in react -- so it makes react unidirectional(Parent to child)</b> </li>
                <li>To overcome to this problem with  - <b>Prop Drilling</b> </li>
                <li>
                    <b>Prop Drilling</b>
                    <ul>
                        <li>Context API</li>
                        <li>useContext</li>
                        <li>REDUX</li>
                    </ul>
                </li>
                <li><b>What Is Redux - </b></li>
                <li>Redux is a pattern and library for managing and updatng application state - Redux is use to state management </li>
                <li>Only one centralised data and from there only we can get and set data</li>
                <li>state is read only - only way to change data using DISPATCH</li>
                <li><img src={reduxImg} alt="redux_fucnrion" width="40%" height="auto"/></li>
                <li><img src={reduxFlowImg} alt="redux_flow_fucnrion" width="40%" height="auto"/></li>
                <li>
                    <ol>
                        <li>Action - "what to do" -  it is plain js object & functions declair to perform action as action creater , -it is reusable, -event serves as central store for state, that needs to be used across your entaire app</li>
                        <li>Reducer - state and action - rule - "How to do" - it takes current state and action as argument and return new state</li>
                        <li>Store(State) - object which hold state of the application</li>
                        <li> we have only one store in redux application.</li>
                        <li> redux store brings together the state, action and reducers that make up our application</li>
                        <li>Function associated with store is - createStore() & dispatch(action) </li>
                    </ol>
                </li>
            </ol>
            <ol><b>Reducer</b> -
                <li>Reducers are pure functions- these are depends on it's arguments and does not changes any of it's argument</li>
                <li>DOES NOT DEPEND ON OTHER EXTERNAL PARAMETERS</li>
                <li>Reducers are called automatically when action is dispatched. --- All reducers connected to the store & present in project get called for every action dispatched.</li>
                <li>it is responsible for perticular state in store & return the new forms of the state </li>
            </ol>
            <br/>
            <br/>
            <div className="container">
                <h1>Increment/Decrement Counter</h1>
                <h4> Using React And Redux </h4>
                <div>
                    <button title="Decrement" onClick={ () => dispatch(decNumber()) }><span> - </span></button>
                    <input name="quantity" type="text" value={myState}/>
                    <button title="Increment" onClick={ () => dispatch(inNumber(5)) }><span> + </span></button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}