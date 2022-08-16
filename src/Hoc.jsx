import React, {Component} from 'react';

//First, we have made one function that is Hoc inside the HOC.js file. 
//That function accepts one argument as a component. 
export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    } 
}