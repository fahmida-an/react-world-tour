import './Countries.css'
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

// import { Linter } from "eslint";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] =useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        console.log('Add this to your visited counntry');
        // console.log(country);
        // visitedCountries.push(country); push pop nibe na notun array banaite hobe
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log(flags);
        console.log('flag adding');

        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries  */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ol>
                {
                    visitedCountries.map(country  => <li key={country.cca3}>
                        {country.name.common}
                    </li>)
                }
                </ol>
            </div>

                {/* display flag */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }

            </div>

            {/* display countries  */}
           <div className="country-container">
           {
                countries.map(country => <Country key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}  ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;