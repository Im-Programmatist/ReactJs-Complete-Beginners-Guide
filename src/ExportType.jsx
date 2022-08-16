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


export const ExportType = () => {
    return(
        <>
            <h3>ES6 provides two ways to export a module from a file: named export and default export.</h3>
            <h3>Named Export: (export)</h3><br/>
            <p>
                With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.
            </p>
            <Pre>
                {` 
                    // imports
                    // ex. importing a single named export
                    import { MyComponent } from "./MyComponent";
                    // ex. importing multiple named exports
                    import { MyComponent, MyComponent2 } from "./MyComponent";
                    // ex. giving a named import a different name by using "as":
                    import { MyComponent2 as MyNewComponent } from "./MyComponent";
                    // exports from ./MyComponent.js file
                    export const MyComponent = () => {}
                    export const MyComponent2 = () => {}
                `}
            </Pre>
            <br/>
            <b>Import all the named exports onto an object:</b>
            <Pre>
                {` 
                    import * as MainComponents from "./MyComponent";
                    // use MainComponents.MyComponent and MainComponents.MyComponent2
                    here
                `}
            </Pre>
            <br/><hr/>
            <h3>Default Export: (export default)</h3><br/>
            <p>
                One can have only one default export per file. When we import we have to specify a name and import like:
            </p>
            <Pre>
                {` 
                    // import
                    import MyDefaultComponent from "./MyDefaultExport";
                    // export
                    const MyComponent = () => {}
                    export default MyComponent;
                `}
            </Pre>
            <br/>
            <b>The naming of import is completely independent in default export and we can use any name we like.</b>
            <Pre>
                {` 
                    Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.
                    Concerning the default export, there is only a single default export per module. 
                    A default export can be a function, a class, an object or anything else. 
                    This value is to be considered as the “main” exported value since it will be the simplest to import.
                `}
            </Pre>
        </>
    );
}