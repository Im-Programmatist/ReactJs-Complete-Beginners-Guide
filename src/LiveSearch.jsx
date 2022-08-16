import React, { useState, Component } from 'react';
import './LiveSearch.css';
import { SearchResult } from './SearchResult';

export const LiveSearch = () => {
    const [img, setImg] = useState("");
    const inputChangeEvent = (event) => {
        const data = event.target.value;
        console.log('inputChangeEvent event.target.value', data);
        setImg((preValue) => {
            console.log('inputchange preValue', preValue);
            return event.target.value;
        });
        
    }
    const [imgSearchText, setSearchText] = useState(img);   
    const submitSearch = () => {
        console.log('img onchange',img);
        setSearchText((preValue) => {
            console.log('submitSearch preValue',preValue);
            return img;
        });
        console.log('imgSearchText value - ',imgSearchText);
    }
    return(
        <>
            <div className="searchbar">
                <input 
                    type="text" 
                    placeholder="Search anything here..." 
                    value={img}
                    name="inputSearch"
                    onChange={inputChangeEvent}
                />
                <button onClick={submitSearch} > Search </button>
                {imgSearchText === "" ? null : <SearchResult imgSearch={imgSearchText} />}
            </div>            
        </>
    );
}