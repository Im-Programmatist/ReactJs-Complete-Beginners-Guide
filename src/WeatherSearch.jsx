import React, { Component, useEffect, useState } from 'react'
import './weatherApp.css';
import sunimg from './images/sun_cloud.png';

export const WeatherSearch = () => {
    const [cityObj, setCityObj] = useState(null);
    const [citySearchText, setCitySearchText] = useState("Amravati");   

    useEffect( () => {
        
        const fetchApiData = async () => {
            const weatherApiURL = `http://api.openweathermap.org/data/2.5/weather?q=${citySearchText}&units=metric&appid=6243553d5a9c885c669045f5daaaba76`;
            const response = await fetch(weatherApiURL);
            const resJsonData = await response.json();
            setCityObj(resJsonData);
            console.log('resJsonData',resJsonData);
        };

        //call function for api data
        fetchApiData();
    },[citySearchText]);//empty arra here...allow to call useEffect only at first time render method call

    return (
        <>
        <div className="appBody">           
            <div className="box">
                <div className="inputData">
                    <input 
                        type="text"
                        className="inputField"
                        value={citySearchText}
                        onChange ={(event) => {
                            setCitySearchText(event.target.value);
                        }}
                    />
                    <div className="info">
                    {
                        (cityObj == undefined || cityObj.cod !== 200) ? ( 
                            <p>No Data Found !</p>
                        ) : 
                        <div>                            
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{citySearchText}
                            </h2>
                            <h1 className="tempreture">
                                {cityObj.main.temp}° cel
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {cityObj.main.temp_min}° cel | Max : {cityObj.main.temp_max}° cel
                            </h3>                            
                        </div>
                    }      
                    </div>
                    <div className = "wave"></div>
                    <div className = " _two"></div>
                    <div className = "_three"></div>
                    <img src={sunimg} alt="weather_sun_moon"/>              
                </div>                
            </div>    
        </div>
        </>
    );
}