import React, {Suspense } from 'react';
import Child from './Child';

//import using Call back - 
//import is a function itself
import('./Math').then((result) => {
    console.warn("result", result.add(5,5));
}); 

const  ReactCreatElement = (props) => React.createElement('div', {className:"TestClass"}, `Message here with prop value - ${props.name}`);
const LazyLoading = React.lazy(()=>import('./LazyLoading')); //Use to load 

export const CodeSplit = () => { 
    const inputRef = React.createRef();
    return (
        <>
            <Suspense fallback={<div><span style={{color:'red'}}>Wait Component Loading</span></div>} >
                <h1>Code Spliting & Lazy Loading File & Forwarding Ref</h1>
                <label>Use fallback to show message before loading.</label>
                <label>React Create element - <ReactCreatElement name="Chetan"/> </label>
                
                <h1>Forward Ref</h1>
                <Child ref={inputRef}/>
                <button onClick={() => {inputRef.current.style.color="red"}}>Change Style Color</button>
                <LazyLoading/>{/*create multiple time to see lazyloading (there must be load of files to see lazy loading)*/} 
            </Suspense>
        </>
    );
}