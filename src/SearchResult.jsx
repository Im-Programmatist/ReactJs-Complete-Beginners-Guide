import React, { Component } from 'react'

export const SearchResult = (props) => {
    const img =`https://source.unsplash.com/400x300/?${props.imgSearch}`;
    console.log('props.imgSearch',props.imgSearch);
    console.log('props.img ',img);
    return (
        <>
            <div>
                <img src={img} alt="Search_Image"  />
            </div>
        </>
    );
}