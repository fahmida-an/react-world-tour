import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css'
import { useState } from 'react';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);
    return (
        <div  className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'wheat'}}>Name: {country.name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small> Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetail 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
            
        </div>
    );
};

export default Country;