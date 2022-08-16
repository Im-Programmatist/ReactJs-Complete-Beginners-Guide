import React from 'react';
import styled from 'styled-components';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

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

//************************************************************************************************************************
//Suppose this is root app, inside we use multiple component and interact with it. 
// pass data within the component (one component can access data from other component in which that data declaired)

const RootApp = () => {
    return(
        <div className="RootApp">
            <h1>Charector Counter</h1>
            <RecoilRoot>                
                <CharCountComp />
                <GetCharCountComp />
            </RecoilRoot>
        </div>
    );
}

//Create Atom for recoil - An atom represents a piece of state. Atoms can be read from and written to from any component. 

const charAtom = atom({
    key:"charAtom",  // unique ID (with respect to other atoms/selectors)
    default:0 // default value (aka initial value)
});

//Components that need to read from and write to an atom should use useRecoilState() 
const CharCountComp = () => {
    const [text, setText] = useRecoilState(charAtom);
    return(
        <div>
            <input type="text" onChange={(event)=>{ setText(event.target.value)}} />
        </div>
    );
} 

//Components that need to read from and write to an atom should use useRecoilState() 
const GetCharCountComp = () => {
    const [text, setText] = useRecoilState(charAtom);
    return(
        <div>
            <h3>{text}</h3>  {/* Here we used atom value set from  charCountComp component which , both component are subscribe to the atom*/}
            <h4> {useRecoilValue(charValueSelector)}</h4> {/* use Selector to get value in component */}
        </div>
    );
} 

//A selector represents a piece of derived state. Derived state is a transformation of state. It modify the state and used logic here
const charValueSelector = selector({
    key:'charValueSelector',
    get: ({get}) => {
        const text = get(charAtom);
        return text.length
    }
})

//************************************************************************************************************************

export const ageAtom = atom({
    key: "age", 
    default: 25  // default global value for age key
});

export const AgeCalculator = () => {
    const [ageState, setAge] = useRecoilState(ageAtom);
    const nowAge = useRecoilValue(ageAtom);    
    console.log('Default value of atom is - ', nowAge);
    const value = useRecoilValue(isChild);
    console.log(value);
    return(<></>);
}

//This is state 
export const isChild = selector({
    key: "childage",
    get: ({ get }) => {
      const state = get(ageAtom);
      return state < 10 ;
    }
});

export const Recoil = () => {

    const [ageState, setAge] = useRecoilState(ageAtom); 
    console.log('ageState hook initial default value ', ageState);
    setAge(9);
    const nowAge = useRecoilValue(ageAtom);    
    console.log('Default value of atom is - ', nowAge);
    const value = useRecoilValue(isChild);
    console.log('selector value - ',value);

    return (<>
        <h2>Recoil</h2>
        <h3>Why Recoil</h3>
        {/* <AgeCalculator /> */}
        <RootApp />
        <ol>
            <li>Firstly, it solves the global state management problems.</li>
            <li>Easy to learn; there are no new major principles n logic to learn.</li>
            <li>Quite Simple, it is similar like react.</li>
            <li>it will not take that much time to learn like redux,To work with Redux, there’s a lot of work that needs to be done to set up a simple store before starting to manage your application state. </li>
            <li>A few points that Recoil has that make this new state management library very powerful: </li>
            <li>
                <ul>
                    <li><b>Shared state— </b>Share the same state in different components in the React tree in a way that’s really performant and consistent.</li>
                    <li><b>Derived data and queries — </b>Compute things based on changing state efficiently in a very robust and bug-free way. Derived data are things that are computed or related to the state in some way.</li>
                    <li><b>App-wide state observation —</b> Observe changes, time-travel debugging, persistence, logging—observe everything that’s happening in the app from some component.</li>
                </ul>
            </li>
            <li></li>
            <li>We can start with binding root app with Recoil, RecoilRoot will behave like a global context provider that will share the global state to your app tree.
                <Pre>
                    {`
                        import { RecoilRoot } from "recoil";

                        ReactDOM.render( 
                        <RecoilRoot>
                        <AppPage />
                        </RecoilRoot>, document.getElementById("root"));
                    `}
                </Pre>
            </li>
        </ol>
        <h4>Here are the two core concepts that we should learn before starting to use Recoil:</h4>
        <ol>
            <li><b>Atoms</b></li>
            <li>
                <ul>
                    <li>An atom is a changeable, subscribable unit of the state.</li>
                    <li>Imagine atoms as a local React state, which any component can subscribe to.</li>
                    <li>Atoms are updatable and subscribable, and changing the value of an atom will re-render every component that’s subscribed to that specific atom.</li>
                    <li>All the components that are subscribed to an atom are sharing the same state.</li>
                    <li>Syntax : 
                        <Pre>
                            {`
                                import { atom } from "recoil";
                                const ageAtom = atom({
                                    //To create an atom we need to provide a key, which should be a unique value.
                                    //This key is used for persistence, debugging, etc.
                                    key: "age", 

                                    //we need to provide the default value of our atom, it can be anything such as arrays, objects, strings, functions, etc.
                                    default: 0 //default global value for age key                                
                                });
                            `}
                        </Pre>
                    </li>
                    <li>For a component to subscribe to an atom, we need to use the <b><i>useRecoilState hook</i></b>. It’s a hook similar to the useState from React, but inside this hook, we pass the atom that we want to subscribe to.
                        <Pre>
                            {`
                                const App = () => {
                                    //App subscribe to an atom 
                                    const [ageState, setAge] = useRecoilState(ageAtom); 
                                    ...
                                }                                
                            `}
                        </Pre>
                    </li>
                    <li> we just want to return the value of a specific state. This is very possible and simple to do with Recoil. We can return only the value of an atom, without the setter function, using the <b><i>useRecoilValue hook</i></b>.
                        <Pre>
                            {`
                                const App = () => {
                                    //Get atomState value - default value get  
                                    const nowAge = useRecoilValue(atomState);                                
                                    ...                                
                                }
                            `}
                        </Pre>
                    </li>
                </ul>
            </li>
            <li><b>Selectors</b>
                <ul>
                    <li>This is similar to how Redux manages states.</li>
                    <li>A selector is a pure function that can receive an atom or a selector as an input.</li>
                    <li>Given an input, the selector returns a modified state every time the upstream atoms or selectors are updated.</li>
                    <li>To create a selector, we need to provide a key, which needs to be a <b>unique value </b> and a <b> get function </b>. This get function returns a modified piece of an atom.</li>
                
                    <li><b>1. set the selectors</b>
                        <Pre>
                            {`
                                import {selector} from 'recoil'

                                const isChild = selector({
                                key: "childage",
                                get: ({ get }) => {
                                    const state = get(age);
                                    return state < 10 ;
                                }
                                });
                            `}
                        </Pre>
                    </li>
                    <li><b>2. use the selectors</b>
                        <Pre>
                            {`
                                import {selector, useRecoilState} from 'recoil' 

                                const isChild = selector({
                                key: "childage",
                                get: ({ get }) => {
                                    const state = get(age);
                                    return state < 10 ;
                                }
                                });
                                
                                export const AgeCalculator = () => {
                                    const [ageState, setAge] = useRecoilState(age);
                                const value = useRecoilValue(isChild);
                                }
                            `}
                        </Pre>
                    </li>
                </ul>
            </li>
        </ol>
        </>
    )
}