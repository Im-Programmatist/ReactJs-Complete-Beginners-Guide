import React, { useContext } from 'react';
import { UserConsumer } from './context/UserContext';

export const InvalidComp = () => {
    console.log('invalid component');
    return(
        <UserConsumer>
            {(props) => {
            return(
                    <div>
                        `{props.name} page nahi aahe ho uplabdh.`<span style={{color:"red"}}> 404 Resource not found </span>
                    </div>
                );
            }}
        </UserConsumer>
    );
};

//export default InvalidComp;