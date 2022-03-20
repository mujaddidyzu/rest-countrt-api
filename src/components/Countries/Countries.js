import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [number,setNumber] =useState(1);
    console.log(number);
    useEffect(()=>{
        
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h2>hello this is from our countries:{countries.length}</h2>
            <div className="countries-container">
            {
                countries.map(country=><Country 
                    data={country}
                    key={country.cca3}
                    ></Country>)
                
            
            }
            </div>
            
        </div>
    );
};

export default Countries;


