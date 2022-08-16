import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AxiosHttpClientService = () => {

    const [num, setNum] = useState(1);
    const [pokename, setPokeName] = useState();
    const [pokemoves, setPokeMoves] = useState();

    useEffect(() => {
        alert("use effect run");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res);
            setPokeName(res.data.name);
            setPokeMoves(res.data.moves.length);
        }

        getData();
    });

    return(
        <>
            <p>
                <span>You have choose {num} option</span><br/>
                <span>I am a <label style={{color:"red"}}> {pokename} </label></span><br/>
                <span>I have <label style={{color:"red"}}> {pokemoves} </label> moves</span>
                <span></span>
            </p>
            <select value={num} onChange={(event) => { setNum(event.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </>
    );
} 