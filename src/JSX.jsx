import React from 'react';
import styled from 'styled-components';

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


export const JSXComp = () => {
    const element = <a href="https://www.reactjs.org"> link </a>;
    const name = 'Josh Perez';
    const element1 = <h1>Hello, {name}</h1>;
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    function getGreeting(user) {
        if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }

    return (
        <div>
            <h3>JSX as and Expression</h3>
            {element}
            <Pre>
                {`
                    const element = <a href="https://www.reactjs.org"> link </a>;
                    {element}
                `}
            </Pre>
            <h3>Embedding Expressions in JSX</h3>
            {element1}
            {getGreeting({firstName:"Chetan",lastName:"Korde"})}
            <Pre>
                {`
                    const name = 'Josh Perez';
                    const element1 = <h1>Hello, {name}</h1>;

                    function getGreeting(user) {
                        if (user) {
                            return <h1>Hello, {formatName(user)}!</h1>;
                        }
                        return <h1>Hello, Stranger.</h1>;
                    }
                `}
            </Pre>

            
        </div>
    ) 
}



