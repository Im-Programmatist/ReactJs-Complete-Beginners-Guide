import React, { useState } from 'react';
// import './Form.css';
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';

const Wrapper = styled.div`
    margin-top: 1em;
    margin-left: 6em;
    margin-right: 6em;
`;

export const Forms = () => {

    const location = useLocation();
    console.log("get data from navigation - ",location.state.name, location.state.id, location.state);
    const [name, setName] = useState("");
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const [fullname, setFullName] = useState(name);    
    const onClickbtn = () => {
        setFullName(name);
    }

    //Form Tag
    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
    }

    //------------------Handling Complex Multiple Input Form States -----------------------

    const [mformdata, setMFullName] = useState( {
        fname: '',
        lname: '',
        email: '',
        pnumber:'',
    } ); //UseState can return object or Fat Arrow Function
    const onMSubmit = (event) => {
        event.preventDefault();
        console.log("All submitted form data - ", mformdata);
    }
    const inputEventHandle = (event) => {
        //console.log(event.target.value);
        //console.log(event.target.name);

        //const value = event.target.value;
        //const name = event.target.name;
        //above by object destructuring
        const { value, name} = event.target; //object destructuring

        setMFullName( (preValue) => {
            console.log(preValue);//get previous value
            
            //1. way
            return{
                ...preValue,
                [name]:value,
            };//Here just add new input field and it will be added here..

            // //2. Way -- Below is option code for above
            // if(name === 'fname'){
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         pnumber: preValue.pnumber,
            //     };
            // }
            // else if(name === 'lname'){
            //     return {
            //         fname: preValue.fname,
            //         lname: value,                   
            //         email: preValue.email,
            //         pnumber: preValue.pnumber,
            //     };
            // }
            // else if(name === 'email'){
            //     return {
            //         fname: preValue.fname,                    
            //         lname: preValue.lname,
            //         email: value,                   
            //         pnumber: preValue.pnumber,
            //     };
            // }
            // else if(name === 'phone_number'){
            //     return {
            //         fname: preValue.fname,                    
            //         lname: preValue.lname,
            //         email: preValue.email,  
            //         pnumber: value,
            //     };
            // }
        })

    }
    //------------------------------------------------------------------------------------
    return (
        <Wrapper>   
            <div>
                <h2>React Forms</h2>
                <ol>
                    <li>In HTML, form data is usually handled by the DOM.</li>
                    <li>In React, form data is usually handled by the components.</li>
                    <li>When the data is handled by the components, all the data is stored in the component state.</li>
                    <li>You can control changes by adding event handlers in the onChange attribute:</li>
                </ol>
            </div>
                     
            <h4><span>Controlled Component : </span></h4>
            <ol>
                <li>Single source of truth.</li>
                <li> In a controlled component, form data is handled by a React component. </li>
            </ol>
            <h4><span>Uncontrolled  Component : </span></h4>
            <ol>
                <li>form data is handled by the DOM itself. To write an uncontrolled component.</li>
                <li> instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.</li>
            </ol>
            <h4>Error : </h4>
            <ol>                    
                <li>If value ="" passes without onclick  : You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.</li>
                <li>You can not write in input</li>
                <li>To resolve above method use defaultValue="" insted of value=""</li>
            </ol>
            <h4>After on click button,  get input value -- {fullname}</h4>
            <h4>You are entering -- {name}</h4>
            <span>Here {`{name}`} is single source of trueth - this name is controlled y react component & not by HTML input - here react get to know what is inside 'name'</span>
            <input type="text" value={name} placeholder="Enter Your Name.." onChange={inputEvent}/>
            <button tyep="button" onClick={onClickbtn}>Click Here 👍</button>
            
            <h4>Using Form Tag</h4>
            
            <form onSubmit={onSubmit}>
                <div>
                    <h4>After on submit get input value -- {fullname}</h4>
                    <input type="text" value={name} placeholder="Enter Your Name.." onChange={inputEvent}/>
                    <button tyep="submit">SUbmit Form 👍</button>
                </div>   
            </form> 
            <br/><br/>
            
            <h4>Handling Complex Multiple Input Form States </h4>
                <form onSubmit={onMSubmit}>
                    <h1>Hello {mformdata.fname} {mformdata.lname} {mformdata.email} {mformdata.pnumber}</h1>
                    <input type="text" placeholder="Enter First Name" name="fname" onChange={inputEventHandle} value={mformdata.fname}/>
                    <br/>
                    <input type="text" placeholder="Enter Last Name" name="lname" onChange={inputEventHandle} value={mformdata.lname}/>
                    <br/>
                    <input type="text" placeholder="Enter email" name="email" onChange={inputEventHandle} value={mformdata.email}/>
                    <br/>
                    <input type="text" placeholder="Enter phone number" name="pnumber" onChange={inputEventHandle} value={mformdata.pnumber}/>
                    <br/>
                    <button type="submit">Submit </button>
                </form>        
            <br/><br/>

        </Wrapper>
    );    
};