import React, { useState, useContext, useEffect, useReducer } from 'react';
import styled from 'styled-components';
//get context from declaration file
import { AddressContext, AddressConsumer } from './context/AddressContext';
import { NameContext, NameConsumer } from './context/NameContext';

// const Wrapper = styled.div`
//     margin-top: 1em;
//     margin-left: 6em;
//     margin-right: 6em;
// `;
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

//use reducer and dispatch 
const initialState = 0 ;
const init = () => {
    
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
} 

export const Hooks = () => {

    //Using useCOntext Hook -get values of Name & Address Context from app file
    const nameContext = useContext(NameContext); //We get name object value which is pass from app file
    
    const addressContext = useContext(AddressContext); //We get address object value which is pass from app file
    //We can directly use this nameContext & addressContext like nameContext.name.firstName & addressContext.locality any where.

    //Use useReduce Hook
    const [state, dispatch] = useReducer(reducer, initialState, init);

    //Using useEffect
    const [num, setNum] = useState(0);
    useEffect(() => {
       // 
        //Wnat to show alert after render count value in useEffect section button click
        //alert("Button click and count increases...");
    },[]);//empty array allow to run this effect code only first time of render method



    // Declare a new state variable, which we'll call "count"
    //Syntax - const[variable as it is, function]
    // ==> so here count is variable as it is to be used, setCount is function
    //useState(initialState, function ) - returns : -- Returns a stateful value, and a function to update it.
    //Hooks For Counter
    const [count, setCount] = useState(10);
    const IncCount = () =>{
        setCount(count+1);
        
    }

    //Hooks for Time
    let cTime = new Date().toLocaleTimeString();
    const [currentTime, setTime] = useState(cTime); //hook
    const updateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    };

    //CLock 
    let clockTime = new Date().toLocaleTimeString();
    const [clcTime, setClockTime] = useState(clockTime); //hook
    
    const updateClockContinues = () => {
        let newTime = new Date().toLocaleTimeString();
        setClockTime(newTime);
    };
    setInterval(updateClockContinues, 1000); //every 1 sec call back function get call

    // event click and hooks - click & duble click
    const purple = "#8e44ad";
    const butname = "Change Bg";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState(butname);
    const bgChange = () => {
        
        let newBg="#34495e"
        setBg(newBg);
        setName("BG Color Changed 😄");
    }
    const doubClick = () => {
        setBg(purple);
        setName(butname);
    };
    return(
        <>
            <h2>Hooks -</h2>
            <h3> useState() -</h3>
            <p> used only at top of the <b>functional component not class component</b> </p>
            <h4>{count}</h4>
            <img src="images/hooks.jpg" alt="hook_img"/>
            <button onClick={() => setCount(count + 1)}>Click To Increase Count</button>
            <button onClick={IncCount}>Click To By Function</button>
            <h3>Time Change</h3>
            <h4>{currentTime}</h4>
            <button type="button" onClick={updateTime}>Change Time </button>
            <button type="button" onClick={() => setTime(new Date().toLocaleTimeString())}>Change Time By setTime </button>
            <br/>
            <h1>Clock --</h1>
            <h3>{clockTime}</h3>
            <br/>
            
            <div style={{backgroundColor:bg}}>
                <p>
                    <button onClick={bgChange} onDoubleClick={doubClick}>{name}</button>
                    <button onMouseEnter={bgChange} onMouseLeave={doubClick}>{name}</button>
                </p>
            </div>
            
            <Pre>
                {`
                    ----------------------- Hooks -------------------------
                    const [count, setCount] = useState(10);
                    const IncCount = () =>{
                        setCount(count+1);
                        
                    }
                    <button onClick={() => setCount(count + 1)}>Click To Increase Count</button>
                    <button onClick={IncCount}>Click To By Function</button>
        
                    -------------------- Equivalent Class Example -----------------     
                    <pre>
                        <code>
                        {class Example extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = {
                                count: 0
                                };
                            }

                            render() {
                                return (
                                <div>
                                    <p>You clicked {this.state.count} times</p>
                                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                                    Click me
                                    </button>
                                </div>
                                );
                            }
                        }}
                        </code>
                    </pre> 
                    ---------------------------------------------------------------------------------
                    <button type="button" onClick={setTime(new Date().toLocaleTimeString())}>Change Time By setTime </button> //
                    onClick={setTime(new Date().toLocaleTimeString())}
                    error : => Everything between the curly braces gets evaluated immediately. This causes the setOrderData_ function to be called in every render loop.
                    use arrow function to solve
                `};
            </Pre> 

            <br/>
            <h2> Use Context Hook -</h2>
            <ul>
                <li>React’s useContext hook makes it easy to pass data throughout your app without manually passing props down the tree.</li>
                <li>Context can make a nice simple alternative to Redux when your data is simple or your app is small.</li>
                <li>The useContext hook is a little different though: It just makes things nicer.</li>
                <li>Consumer Adds Extra Nesting, (return inside return for every context in above example), to avoid that nesting we use useContext Hooks.</li>
                <li>We can directly use this nameContext & addressContext like nameContext.name.firstName & addressContext.locality any where.</li>
                <li>`{nameContext.name.firstName} {nameContext.name.lastName} {addressContext.locality} {addressContext.TQ} `</li>
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
                <button
                onClick={() => {
                    const newName = { firstName: 'Patil', lastName: 'Saheb' };
                    nameContext.setName(newName)
                }}
                >
                Update Name
                </button>
            </ul>            
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

                    //Using useCOntext Hook -get values of Name & Address Context from app file
                    const nameContext = useContext(Name); //We get name object value which is pass from app file
                    const addressContext = useContext(Address); //We get address object value which is pass from app file
                    //We can directly use this nameContext & addressContext like nameContext.name.firstName & addressContext.locality any where.
                    {nameContext.name.firstName} {nameContext.name.lastName} {addressContext.locality} {addressContext.TQ}
                `}
            </Pre>
            <br/>
            <h3>useEffect Hook -</h3>
            <ul>
                <li><b>useEffect Hook  work as componentDidMount, componentDidUpdate, and componentWillUnmount combined.</b></li>
                <li>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates</li>
                <li>useEffect called inside a component to access state variable</li>
                <li>useEffect run after every render </li>
                <li>we return a function from our effect, to cleanup mechanism for effects but This is the optional. Every effect may return a function that cleans up after it.  React also cleans up effects from the previous render before running the effects next time. </li>
                <li>`{"useEffect(() => {   "}`     
                empty array `{'},[]);'}` allow to run this effect code only first time of render method </li>
            </ul>
            <button onClick={()=>{ setNum(num+1)}}> CLick Here To COunt Increase {num}</button>

            <Pre>
                {` 
                `}
            </Pre>           
            <br/>
            <h3>useReducer Hook -</h3>
            <ul>
                <li>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</li>
                <li>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</li>
                <li><b>Syntax:</b> <br/>const [state, dispatch] = useReducer(reducer, initialArgs, init);</li>
                <li>The dispatch method is available on the store object. An action gets dispatched to trigger an update to the Redux store.</li>
            </ul>
            <div>
                <button onClick = {() => dispatch({type: "INCREMENT"})}> INC </button>
                <p>{state}</p>
                <button onClick = {() => dispatch({type: "DECREMENT"})}> DEC </button>
                <button onClick = {() => dispatch({type: "RESET"})}> RESET </button>
            </div>

        </>
    );
}
