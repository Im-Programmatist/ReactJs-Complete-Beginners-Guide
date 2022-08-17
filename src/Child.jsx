import React, { Component, useRef, forwardRef } from 'react'

//forwardRef - It is like higher order component thats why we need to wrap all in it.
const Child = React.forwardRef((prop, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
});

export default Child;
