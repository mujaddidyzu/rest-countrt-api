import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.area)
    
    const {name,area,region,population,flags}=props.data
    // console.log(props.country)
    return (
        <div className="country bg-tomato">
            <h2>country Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p><small>area:{area}</small></p>
            <p><small>region:{region}</small></p>

        </div>
    );
};

export default Country;