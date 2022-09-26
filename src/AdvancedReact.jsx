import React, { Component, useState, useReducer, createContext, useContext, useRef, forwardRef } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

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


//Use button at multiple occurances 
const Button = (props) => {
    const [counter, setCounter] = useState(0); //you can SET type of value using useState<NUMBER>(0)
    return (
        <div style={{color:props.color,
        textDecoration: props.underline ?  'underline' : undefined}}
        onClick={()=>setCounter((c) => c + props.increment)}>
            CLick to Increment Me {counter}
        </div>
    );
}

// * Using Dispatch and Reducer
function reducer({state}) {
    switch(state){
        case 'PRESS_ONE' : return { state: 'PRESS_TWO'};
        case 'PRESS_TWO' : return { state: 'PRESS_THREE'};
        case 'PRESS_THREE' : return { state: 'PRESS_ONE'};
    }
}


export const AdvancedReact = () => {

    //MULTIPLE BUTTON
    const propsObj = [{
        increment: 2,
        color: "green",
        underline : true
    },
    {
        increment: 2,
        color: "blue",
        underline : true
    }];
    
    //OBJECT DESTRUCTURING & SPREAD OPERATOR
    const obj = { x:1};
    const obj2 = {  x:2,... obj, x:3}
    console.log(obj2.x === 1);
    console.log(obj.x === 1);    
    
    //USING DESPATCH AND REDUCER
    const [state , dispatch] = useReducer(reducer,{
        state:'PRESS_ONE'
    });
    console.log(state.state);

    return(
        <>
            <h2>Multi use Button</h2>            
            <Button increment={2} color="black" underline={true} />
            <Button {...propsObj[0]} />
            <Button {...propsObj[1]} />{/*using destrucuting object*/}
            <br/>
            <h4>Explanation -- </h4>
            <Pre>
                {`
                Above code will work like below ..
                    use of object-destucturing here...
                    THis jsx code converted in to React.createElement('Button', {
                    //prop1: '100',
                    // ...object-destucturing here
                    //})
                    //<Button prop1="100"/> */}

                `}
            </Pre>
            <h2>object destructuring using spread operator </h2>  
            <Pre>{`
                    const obj = { 
                        x:1
                    };

                    *** IF THIS OBJECT DESTRUCTURING BEFORE THE x:2 THEN IT CHANGES obj.x=2
                    const obj2 = { 
                        ... obj,  
                        x:2
                    } 
                    ANS =>>> obj.x = 2 NOT 1
                    
                    *** IF THIS OBJECT DESTRUCTURING AFTER THE x:2 THEN IT CHANGES obj.x=1 AS IT IS BUT
                    obj2.x WOULD BE 1 
                    const obj2 = { 
                        x:2,
                        ... obj
                    } 
                    ANS =>>> obj2.x = 1 NOT 1

                    **** 
                    const obj = { x:1};
                    const obj2 = {  x:2,... obj, x:3}
                    console.log(obj2.x === 1); //Here false as ...obj after x=2 => so x is 2 here
                    console.log(obj.x === 1); //Here true as ...obj before x=3 => so x is 1 here

                `} 
            </Pre>
            <br/>

            <h2>State Machine Understanding</h2>            
            <ul>
                <li>Using state machine we can create logic which transfer state of perticular program from one state to another</li>
                <li>Lets say your program start and has 10 Buttons on your page. whenever user click on button , transition goes in different state, means from one button to other buttons logic code and so on</li>
                <li>In that button click is one of the button call https request, then you are not sure to request that it might complete or not</li>
                <li>we could transition to success state or error state.</li>
                <li></li>
            </ul>
            <button onClick={() => dispatch()}>Call Dispatch  & State value is - {state.state} </button>
            <h4>Another Example of Use Of multiple state while calling Http request</h4>
            <Application/>
            <Pre>
                {`
                   //EXAMPLE USE TO USE MULTOIPLE STATE
                    export const Application  = () => {
                        const [state, setState] = useState('idle');
                        function clicked ()
                        {
                            setState('Loading');
                            fetch('/data.json')
                            .then((data) => {
                                try{
                                    JSON.parse(data);
                                    setState('Loaded');
                                }catch(error){
                                    setState('Req-Error');
                                }
                            })
                            .catch((err) => {
                                setState('Network Error');
                            });
                        }
                    
                        if(state === 'Loading'){
                            return <div>Loading....</div>
                        }
                        if(state === 'Network Error'){
                            return <div>Network Error....</div>
                        }
                        if(state === 'Req-Error'){
                            return <div>Network Error....</div>
                        }
                    
                        return (<>
                            <div>
                            <button onClick={clicked()}> API CLicked By Self INvolking </button>
                            </div>    
                        </>);
                    }
                `} 
            </Pre>
             <br/>

            <h2>Compounded Component & Interlink It</h2>            
            <ul>
                <li>we want to toggle checkbox value from label onclick</li>
                <li>simply by <Label toggle={() => {}}>Check Box Label</Label> but we want to internaly share state  in parent</li>
                <li> React not allow to change child props in iteration but <b>React allow to clone element</b>  </li>
                <li>Here we have access to the hello element with world! text, without passing to the element in render method, we have override it internally </li>
                <li>In Recat there are few valid defination of dom elements like,
                    DOM element, Classes, Functions, Null etc - 
                    & Br is not react element here 
                </li>
            </ul>
            <Appl/>
            <Pre>
                {`
                    const P = () => {return <p>Hello custom dom element</p>};

                    const Checkbox = ({children}) => {
                        
                        const [checked, setChecked] = useState(true);
                    
                        //children via destructuring
                        //return <div> {children} </div>
                    
                        //SImmilar way in -- ITERATES CHILDREN AND TAKES PROPERTY
                        const allchildren = React.Children.map(children,(child) => {
                            //Changing props of child not allow like below
                            /*child.props.hello = 'world!';
                            return child;*/
                            console.log(child);
                            //Reactdom Element - classes, functions and null etc -- not BR here second child is br which is html dom element
                            //WE CAN FILTER ELEMENT BY
                            /* here we allow html dom elemnt 
                            if(typeof child.type !== 'function'){
                                return child;
                            }*/
                    
                            //Allow specific element here else throw error 
                            //It does not allow const defined element except mentioned here 
                            if(child.type !== Label && child.type !== CheckboxInput){
                               throw new Error("${'{child.type}'} Custom element other than mentioned, is not allowed inside the checkbox component!");
                            }
                    
                            //restrict DOM element it 
                            if(typeof child.type === 'string'){
                                //put error
                                //throw new Error("${'{child.type}'} DOM element is not allowed inside the checkbox component!");
                                //OR ignor dom element 
                                return null;
                            }
                            //SO React allow to clone and then change props
                            const clone = React.cloneElement(child, {
                                hello: "World!", //new props of child,
                                checked, 
                                setChecked
                            })
                            return clone;
                        });
                        return allchildren;
                        
                    } 
                    const CheckboxInput = ({hello, checked, setChecked}) => {
                       
                        return(
                            <>
                                {hello}
                                <input 
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(event) => {
                                        setChecked(event.target.checked);
                                    }}
                                />
                            </>
                        );
                    } 
                    const Label = ({toggle, children, hello, checked, setChecked}) => {
                        console.log('{toggle, children}',{toggle, children});
                        return <label style={{color:"Red"}} htmlFor="checkbox" onClick={() => setChecked((state) => !state)}>{hello} {children} </label>
                    } 
                    
                    export const Appl = () => {
                        return (
                            <Checkbox>
                                <CheckboxInput />
                                <P/>
                                <br/>{/*It is html dom element not react dom */}
                                <Label>Click here on label to checked/unchecked checkbox</Label>
                            </Checkbox>
                        );
                    }
                `}
            </Pre>
            <br/>
            <h3>FLexible COmponent Using COntext </h3>
            <FlexibleApp />
            <Pre>{`
                //Create context 
                const CHeckboxInterface = createContext(null);
                
                const CheckboxFlexibleCOmponent = ({children}) => {
                    
                    const [checked, setChecked] = useState(true);
                
                    //we can rideof this below code by using simple context
                    // const allchildren = React.Children.map(children,(child) => {
                    //     console.log(child);
                        
                    //     //SO React allow to clone and then change props
                    //     const clone = React.cloneElement(child, {
                    //         hello: "World!", //new props of child,
                    //         checked, 
                    //         setChecked
                    //     })
                    //     return clone;
                    // });
                    //USe COntext
                    //set value that can directly access by child element
                    return <CHeckboxInterface.Provider
                        value={{
                            checked, setChecked
                        }}>
                        {children} 
                    </CHeckboxInterface.Provider>;
                    
                } 
                const CheckboxInputFlex = () => {
                    const context = useContext(CHeckboxInterface);
                    if(!context)
                    {
                        throw new Error('Label should be called from checkbox component');
                    }
                    const {checked, setChecked} = context; //get vlue from context object by destructuring
                    return(<input 
                            type="checkbox"
                            checked={checked}
                            onChange={(event) => {
                                setChecked(event.target.checked);
                            }}
                        />
                    );
                } 
                const LabelFlex = ({children}) => {
                    const context = useContext(CHeckboxInterface);
                    if(!context)
                    {
                        throw new Error('Label should be called from checkbox component');
                    }
                    const {checked, setChecked} = context; //get vlue from context object by destructuring
                    return <label style={{color:"Red"}} htmlFor="checkbox" onClick={() => setChecked((state) => !state)}> {children} </label>
                } 
                
                export const FlexibleApp = () => {
                    return (
                        <>
                        <CheckboxFlexibleCOmponent>
                            <CheckboxInputFlex />
                            <div>
                                <div>
                                    <LabelFlex>Click Me Flexible Component</LabelFlex>
                                </div>
                            </div>
                        </CheckboxFlexibleCOmponent>
                        </>
                    );
                }
            `}</Pre>
            <br/>
            <h3>Higher-Order Components</h3>
            <ul>
                <li>A higher-order component is a function that takes a component and returns a new component. </li>
                <li>A higher-order component (HOC) is the advanced technique in React.js for reusing component logic. </li>
                <li>Use to add on in component , we can add extra general (Common for all) feature in included component </li>
            </ul>
            <IncludeComponent />
            <Pre>
                {`                    
                    //First, we have made one function that is Hoc inside the HOC.js file. 
                    //That function accepts one argument as a component. 
                    export function Hoc(HocComponent){
                        return class extends Component{
                            render(){
                                return (
                                    <div>
                                        <HocComponent hocName=" -- you are using HOC props"></HocComponent>
                                    </div>
                                );
                            }
                        } 
                    }

                    class IncludeComponent extends Component {
                    
                        render() {
                        return (
                            <div>
                            Higher-Order Component Tutorial {this.props.hocName}
                            </div>
                        )
                        }
                    }
                    IncludeComponent = Hoc(IncludeComponent);
                    export default IncludeComponent;
                    //OR
                    //export default Hoc(IncludeComponent); //HOC is '{HOC} from./HOC' ==> HOc imported name 

                `}
            </Pre>
            <br/>
            <h3>PropTypes For Components Props</h3>
            <ul>
                <li> PropTypes will define the types of props and allow defined type only </li>
                <li>if defined type is string and number passes then error throw in console</li>
            </ul>
            <User />
            <Pre>
                {`                  
                    //PROTOTYPE In Component
                    const Person = (props) => {
                        return(
                            <div>
                                <h3>{props.name}</h3>
                                <h3>{props.email}</h3>
                                <h3>{props.contact}</h3>
                                <h3>{props.isMarried}</h3>
                                <h3>Address are -</h3>
                                {
                                    props.addresses.map((value, index) => {
                                        return <li key={index}>{value}</li>
                                    })
                                }
                            </div>
                        );
                    }

                    const Persons = ({person}) => {
                        return(
                            <div>
                                <h3>{person.name}</h3>
                                <h3>{person.email}</h3>
                                <h3>{person.age}</h3>
                                <h3>{person.isMarried}</h3>
                                <h3>Address are -</h3>
                                {
                                    person.addresses.map((value, index) => {
                                        return <li key={index}>{value}</li>
                                    })
                                }
                            </div>
                        );
                    }
                    
                    PersonComp.propTypes = {
                        name:PropTypes.string,
                        email:PropTypes.string,
                        contact:PropTypes.number,
                        isMarried:PropTypes.bool,
                        addresses:PropTypes.arrayOf(PropTypes.string)
                    }

                    //IF WE PASS OBJECT AS PROPS THEN USE
                    PersonObjComp.propTypes = {
                        persondata: PropTypes.shape({
                            name:PropTypes.string,
                            email:PropTypes.string,
                            age:PropTypes.number,
                            isMarried:PropTypes.bool,
                            addresses:PropTypes.arrayOf(PropTypes.string)
                        })
                    }
                    
                    const chet1 = {
                        name: "Chetan"
                        email:"Chetan@hma.com"
                        age:16
                        isMarried:false
                        addresses: ["Ram Nagar, Nagpur", "Kalgavhan", "Amravati"]
                    }
                    const chet2 = {
                        name: "Korde"
                        email:"Chetan@fdbdrgn.com"
                        age:"28"
                        isMarried:true
                        addresses: ["Akot", "AKola", "Nagpur"]
                    }

                    const User = () => {
                        return(
                            <Person 
                                name="Chetan"
                                email="Chetan@hma.com"
                                contact="9527364127"
                                isMarried={false}
                                addresses={["Ram Nagar, Nagpur", "Kalgavhan", "Amravati"]}
                            />  
                            <Presons person={chet1}/>
                            <Presons person={chet2}/>
                        );
                        
                    }

                    //index.js:1 Warning: Failed prop type: Invalid prop contact of type string supplied to Person, expected number.
                `} 
            </Pre>   
            <br/>
            <br/>
            <h3>FORWARD REF IN REACT</h3>  
            <ol>
                <li>Passing a ref to the child component is called as forwarding ref</li>
                <li>React provides a createRef function to create a ref for element.</li>
                <li><b>forwardRef </b> is a function to pass the ref to child component.</li>
                <li> We can access child element in parent through forwarding refference.</li>
            </ol>   
            <RefParent />
            <Pre>
                {`
                    const RefParent = () => {

                        let inputRef = useRef(null);
                        
                        function updateInput() {
                            inputRef.current.value = "1000";
                            inputRef.current.style.color = "Red";
                        } 

                        return(
                            <>
                                <H1> Forword Reff</H1>
                                <RefChild />
                                <button onClick={updateInput}>Update InputBox Value</button>
                            </>
                        )
                    } 
                    export RefParent;

                    const RefChild = (props, ref) => {
                        return(
                            <>
                                <input type="text" ref={ref} />
                            </>
                        )
                    } 
                    export forwardRef(RefChild);
                `}
            </Pre>    
        </>
    );

};

//****************State Machine Understanding
export const Application  = () => {
    const [state, setState] = useState('idle');
    function clicked ()
    {
        setState('Loading');
        fetch('/data.json')
        .then((data) => {
            try{
                JSON.parse(data);
                setState('Loaded');
            }catch(error){
                setState('Req-Error');
            }
        })
        .catch((err) => {
            setState('Network Error');
        });
    }

    if(state === 'Loading'){
        return <div>Loading....</div>
    }
    if(state === 'Network Error'){
        return <div>Network Error....</div>
    }
    if(state === 'Req-Error'){
        return <div>Network Error....</div>
    }

    return (<>
        <div>
        <button onClick={clicked()}> API CLicked By Self INvolking </button>
        </div>    
    </>);
};


//****************Compounded Component & Interlink It

const P = () => {return <p>Hello custom dom element</p>};

const Checkbox = ({children}) => {
    
    const [checked, setChecked] = useState(true);

    //children via destructuring
    //return <div> {children} </div>

    //SImmilar way in -- ITERATES CHILDREN AND TAKES PROPERTY
    const allchildren = React.Children.map(children,(child) => {
        //Changing props of child not allow like below
        /*child.props.hello = 'world!';
        return child;*/
        console.log(child);
        //Reactdom Element - classes, functions and null etc -- not BR here second child is br which is html dom element
        //WE CAN FILTER ELEMENT BY
        /* here we allow html dom elemnt 
        if(typeof child.type !== 'function'){
            return child;
        }*/

        //Allow specific element here else throw error 
        //It does not allow const defined element except mentioned here 
        // if(child.type !== Label && child.type !== CheckboxInput){
        //    throw new Error(`${child.type} Custom element other than mentioned, is not allowed inside the checkbox component!`);
        // }

        //restrict DOM element it 
        console.log(typeof child.type );
        if(typeof child.type === 'string'){
            //put error
            //throw new Error(`<${child.type}> DOM element is not allowed inside the checkbox component!`);
            //OR ignor dom element 
            return null;
        }
        //SO React allow to clone and then change props
        const clone = React.cloneElement(child, {
            hello: "World!", //new props of child,
            checked, 
            setChecked
        })
        return clone;
    });
    return allchildren;
    
} 
const CheckboxInput = ({hello, checked, setChecked}) => {
   
    return(<>
            {hello}
            <input 
                type="checkbox"
                checked={checked}
                onChange={(event) => {
                    setChecked(event.target.checked);
                }}
            />
        </>
    );
} 
const Label = ({toggle, children, hello, checked, setChecked}) => {
    console.log('{toggle, children}',{toggle, children});
    return <label style={{color:"Red"}} htmlFor="checkbox" onClick={() => setChecked((state) => !state)}>{hello} {children} </label>
} 

export const Appl = () => {
    return (
        <Checkbox>
            <CheckboxInput />
            <P/>
            <br/>{/*It is html dom element not react dom*/}
            <Label>Click here on label to checked/unchecked checkbox</Label>
        </Checkbox>
    );
}

//****************USING CONTEXT GET FLEXIBLE ELEMENT

//Create context 
const CHeckboxInterface = createContext(null);

const CheckboxFlexibleCOmponent = ({children}) => {
    
    const [checked, setChecked] = useState(true);

    //we can rideof this below code by using simple context
    // const allchildren = React.Children.map(children,(child) => {
    //     console.log(child);
        
    //     //SO React allow to clone and then change props
    //     const clone = React.cloneElement(child, {
    //         hello: "World!", //new props of child,
    //         checked, 
    //         setChecked
    //     })
    //     return clone;
    // });
    //USe COntext
    //set value that can directly access by child element
    return <CHeckboxInterface.Provider
        value={{
            checked, setChecked
        }}>
        {children} 
    </CHeckboxInterface.Provider>;
    
} 
const CheckboxInputFlex = () => {
    const context = useContext(CHeckboxInterface);
    if(!context)
    {
        throw new Error('Label should be called from checkbox component');
    }
    const {checked, setChecked} = context; //get vlue from context object by destructuring
    return(<input 
            type="checkbox"
            checked={checked}
            onChange={(event) => {
                setChecked(event.target.checked);
            }}
        />
    );
} 
const LabelFlex = ({children}) => {
    const context = useContext(CHeckboxInterface);
    if(!context)
    {
        throw new Error('Label should be called from checkbox component');
    }
    const {checked, setChecked} = context; //get vlue from context object by destructuring
    return <label style={{color:"Red"}} htmlFor="checkbox" onClick={() => setChecked((state) => !state)}> {children} </label>
} 

export const FlexibleApp = () => {
    return (
        <>
        <CheckboxFlexibleCOmponent>
            <CheckboxInputFlex />
            <div>
                <div>
                    <LabelFlex>Click Me Flexible Component</LabelFlex>
                </div>
            </div>
        </CheckboxFlexibleCOmponent>
        </>
    );
}


//****************** HOC COMPOENENT


//First, we have made one function that is Hoc inside the HOC.js file. 
//That function accepts one argument as a component. 
export function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent hocName=" -- you are using HOC props"></HocComponent>
                </div>
            );
        }
    } 
}

class IncludeComponent extends Component {
  
    render() {
      return (
        <div style={{color:"RED"}}>
          Higher-Order Component Tutorial <span style={{color:"GREEN"}}>{this.props.hocName} </span>
        </div>
      )
    }
  }
IncludeComponent = Hoc(IncludeComponent);
export default IncludeComponent;
//OR
//export default Hoc(IncludeComponent); //HOC is '{HOC} from./HOC' ==> HOc imported name 


//PROTOTYPE In Component
const PersonComp = (props) => {
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.email}</h3>
            <h3>{props.contact}</h3>
            <h3>{props.isMarried}</h3>
            <h3>Address are -</h3>
            {
                props.addresses.map((value, index) => {
                    return <li key={index}>{value}</li>
                })
            }
        </div>
    );
}

const PersonObjComp = ({ persondata }) => {
    return(
        <div>
            <h3>{persondata.name}</h3>
            <h3>{persondata.email}</h3>
            <h3>{persondata.age}</h3>
            <h3>{persondata.isMarried}</h3>
            <h3>Address are -</h3>
            {
                persondata.addresses.map((value, index) => {
                    return <li key={index}>{value}</li>
                })
            }
        </div>
    );
}

PersonComp.propTypes = {
    name:PropTypes.string,
    email:PropTypes.string,
    contact:PropTypes.number,
    isMarried:PropTypes.bool,
    addresses:PropTypes.arrayOf(PropTypes.string)
}

//IF WE PASS OBJECT AS PROPS THEN USE
PersonObjComp.propTypes = {
    persondata: PropTypes.shape({
        name:PropTypes.string,
        email:PropTypes.string,
        age:PropTypes.number,
        isMarried:PropTypes.bool,
        addresses:PropTypes.arrayOf(PropTypes.string)
    })
}

const chet1 = {
    name: "Chetan",
    email:"Chetan@hma.com",
    age:16,
    isMarried:false,
    addresses: ["Ram Nagar, Nagpur", "Kalgavhan", "Amravati"]
}
const chet2 = {
    name: "Korde",
    email:"Chetan@fdbdrgn.com",
    age:28,
    isMarried:true,
    addresses: ["Akot", "AKola", "Nagpur"]
}

const User = () => {
    return(
        <>
            <PersonComp 
                name="Chetan"
                email="Chetan@hma.com"
                contact={9527364127}
                isMarried={false}
                addresses={["Ram Nagar, Nagpur", "Kalgavhan", "Amravati"]}
            />  
            <PersonObjComp persondata={chet1}/>
            <PersonObjComp persondata={chet2}/>
        </>
    );
    
}

//index.js:1 Warning: Failed prop type: Invalid prop `contact` of type `string` supplied to `Person`, expected `number`.

//FORWARD REF IN REACT
const RefParent = () => {

    let inputRef = React.useRef(null);
    
    function updateInput() {
        inputRef.current.value = "1000";
        inputRef.current.style.color = "Green";
        inputRef.current.placeholder = "Refference Value";
    } 

    return(
        <>
            <h4> Forword Reff</h4>
            <RefChild ref={inputRef} />
            <button onClick={updateInput}>Update InputBox Value</button>
        </>
    )
} 

const RefChild =  React.forwardRef((props, ref) => {
    console.log("ref",ref);
    return(
        <>
        <div>
            <input type="text" id="input1" ref={ref} /> 
        </div>
      
        </>
    )
}); 