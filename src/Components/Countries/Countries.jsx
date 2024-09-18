import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [visitedCountries, setvisitedCountries] = useState([]);
  const [visitedFlags, setvisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  const newVisitedFlags = (flag) => {
    const newvisitedFlags = [...visitedFlags, flag];
    setvisitedFlags(newvisitedFlags);
  };

  return (
    <div>
      <h2>Country: {countries.length}</h2>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ol className="visitedCountry">
          {visitedCountries.map((country, ids) => (
            <li key={ids}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="flagContainer">
        {visitedFlags.map((flag, ids) => (
          <img key={ids} src={flag}></img>
        ))}
      </div>
      <div className="container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            newVisitedFlags={newVisitedFlags}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}
