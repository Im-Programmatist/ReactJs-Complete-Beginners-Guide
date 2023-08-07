import React, { Component } from 'react';
//import styled from 'styled-components';
import { useParams, Link, useHistory  } from 'react-router-dom';

// const GridWrapper = styled.div`
//     display: grid;
//     grid-gap: 10px;
//     margin-top: 1em;
//     margin-left: 6em;
//     margin-right: 6em;
//     grid-template-columns: repeat(12, 1fr);
//     grid-auto-rows: minmax(25px, auto);
// `;

// export const Home = ({match}) => {
    //  if (match.params.fname !== '' && match.params.lname !== '') {
    //     return (
    //         <div>
    //             <p><b> Hii Welcome {fname} {lname}</b></p>
    //         </div>
    //     )
    // }
    // else if (match.params.fname !== '' && match.params.lname == '') {
    //     return (
    //         <div>
    //             <p><b> Hii Welcome {fname} </b></p>
    //         </div>
    //     )
    // }
    // else if (match.params.lname !== '' && match.params.fname == '') {
    //     return (
    //         <div>
    //             <p><b> Hii Welcome {lname} </b></p>
    //         </div>
    //     )
    // }
    // else{
    //     return (
    //         <div className="App">
    //             <h3>Welcome</h3>
    //         </div>
    //     )
    // }
// }
export const Home = () => {
    const history = useHistory();
    const toNavigateComponent = () => {
        history.push("/forms", { name:'Mr Chetan Patil',id:23 });
    }

    // const navigate = useNavigate();
    // const toNavigateComponent=()=>{
    //     navigate('/forms',{state:{id:1,name:'Chetan Patil'}});
    // }

    //using useParam Hooks
    const {fname, lname} = useParams(); //{fname, lname } variable name should be same as param name passed
    console.log(fname, typeof(fname));
    console.log(lname, typeof(lname));
    if (fname !== undefined && lname !== undefined) {
        return (
            <div>
                <p><b> Hii Welcome {fname} {lname}</b></p>
            </div>
        )
    }
    else if (fname !== undefined && lname === undefined) {
        return (
            <div>
                <p><b> Hii Welcome {fname} </b></p>
            </div>
        )
    }
    else if (lname !== undefined && fname === undefined) {
        return (
            <div>
                <p><b> Hii Welcome {lname} </b></p>
            </div>
        )
    }
    else{
        return (
            <div>
                <h3>Welcome</h3>
                <a style={{color:"red"}} onClick={()=>{toNavigateComponent()}}>Component Form</a>
                <ul>
                    <li> <i>https://reactjs.org/tutorial/tutorial.html -- Practical tutorial</i> </li>
                    <li> <i>https://reactjs.org/docs/hello-world.html -- step by step tutorial</i> </li>
                    <li> You’ll develop a strong understanding of React’s most essential concepts: JSX, class and function components, props, state, lifecycle methods, and hooks. You’ll be able to combine these ideas in React’s modular programming style. </li>
                    <li> A toolchain is the set of tools that compiles source code into executables that can run on your target device, and includes a compiler, a linker, and run-time libraries.</li>
                    <li>We’ll be building a toolchain that includes:
                        <ol>
                            <li>Bundling (with Parcel)</li>
                            <li>Linting and Formatting (with ESLint and Prettier)</li>
                            <li>Transpiling (with Babel)</li>
                            <li>Styling (CSS/SCSS/Styled Components)</li>
                            <li>Data Fetching (with fetch)</li>
                        </ol>
                    </li>
                    <li> <b>Data flows from top to bottom in react -- so it makes react unidirectional(Parent to child)</b> </li>
                    <li><b>Yarn Like NPM - Package Manager </b><br/>
                        Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.
                    </li>
                    <li><b><i>Install React On System</i></b>
                        <ol>
                            <li> Select any directory where we want to install react (No need of xampp or lamp)</li>
                            <li> npx create-react-app FolderNameOfProject (npx avoid versioning, dependancy issue and installing unneccessory packages) <b>OR</b> </li>
                            <li> Globally with npm is : $ npm install -g create-react-app FolderNameOfProject</li>
                            <li> After successfully  installed, you can run several commands:
                                <ol>
                                    <li>npm start :-  Starts the development server.</li>
                                    <li>npm run build :- Bundles the app into static files for production. </li>
                                    <li>npm test :- Starts the test runner.</li>
                                    <li>npm run eject :-  Removes this tool and copies build dependencies,configuration files  and scripts into the app directory. </li>
                                    <li>Run Project Created By $ npm start</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ul>
                <h2>Using CLass And Functional COmponent</h2>
                <FunctionalComp name="patil"> Hii Functional </FunctionalComp>
                <ClassComp title="Hello Class"> It's outside the comp class </ClassComp>
            </div>
        )
    }
}

export const FunctionalComp = (props) => {
    return (
        <div> This is FUnctional Component -{props.children}, name is {props.name}</div>
    )
}

export const FunctionalComp2 = (props) => {
    return (
        <div> This is FUnctional Component -{props.children}, name is {props.age}</div>
    )
}

export class ClassComp extends Component {

    state = {
        users: [
            {name : "Chetan1", age : 25},
            {name : "Chetan2", age : 26},
            {name : "Chetan3", age : 27}
        ],
        title : "User List"
    }
    constructor(){
        super();
    }

    makeUsYounger = () => {
        this.state.users.map((value, index) =>{
            this.setState({
                users: [
                    {name : "Chetan1", age : 15},
                    {name : "Chetan2", age : 16},
                    {name : "Chetan3", age : 17}
                ],
            });
        });

        console.log('state will be same in console as html dom not yet updated but react dom update age appearances every where on page ',this.state.users);
    }
    render(){
        return(
            <>
                <div> This is Class Component - {this.props.title} &  {this.props.children}</div>
                <h2> Using state - </h2>
                <div>
                    <span>{this.state.title}</span>
                    {
                        this.state.users.map( (user, index) => {
                            return <FunctionalComp2  key={index} age={user.age} > {user.name} </FunctionalComp2>
                        })
                    }
                </div>
                <button onClick={this.makeUsYounger}>Make Us Younger</button>
                {/* when we use  onClick={this.makeUsYounger()} with () then it will be self involked function, call after render itself*/}
            </>
        );
    }
}