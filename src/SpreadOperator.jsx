import React from 'react';


export const Spread  = () => {

    //________________Spred Operator ______________________
        const test = ["korde","chetan"];
        const biodata = [1, ...test, 28, "male"];
        console.log('test array', test);
        console.log('biodata array expand using spred operator, test array separated in indi. element', biodata);

        //array concat 
        console.log("array concat using spred operator");
        const arr1 = ["absbvc", "chbwec", "wfeev", 1, 2 ];
        const arr2 = ["arr2fer", "ferfg", "refuhhuc", "iugeui"];
        const arr3 = [...arr1, ...arr2];
        console.log("arr1 and arr2 concated array - ",arr3);

        console.log("destructuring using spred operator");
        const shootingGame = ['call of duety','pubg', 'Residency Evil', 'Far Cry'];
        var [first, ...remaining] = shootingGame;
        console.log('get first element - ',first);
        console.log('remainig array make from destructung', remaining);

        console.log("object using spred operator");
        const testobj = { fname:"korde", lname:"chetan"};
        const biodataobj = {id:1, ...testobj, age:28, gender:"male"};
        console.log('test object', testobj);
        console.log('biodata object expand using spred operator, test object separated in indi. element', biodataobj);

    //_________________________________

    return(
        <>
            <h1>Spread Operator </h1>
            <ol>
                <li>The Syntax is three dots(...) followed by array (or iterables)</li>
                <li>It expands array in to individual element</li>
                <li>Can use to concate array </li>
                <li>So it can be use to expand array in a placeas where zero or more elementsa are expected </li>
            </ol>
            <br/><br/>
        </>
    );
}
