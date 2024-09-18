import { useState } from "react";
import "./Country.css";
export default function Country({
  country,
  handleVisitedCountries,
  newVisitedFlags,
}) {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  //   console.log(handleVisitedCountries);
  return (
    <div className={`box ${visited ? "visited" : "notVisited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button  onClick={() => handleVisitedCountries(country)} className="mark">
        Mark Visited
      </button>
      <button style={{marginLeft:'30px'}} onClick = {()=>newVisitedFlags(country.flags.png)}>Add Flag</button>
      <div className="visit">
        <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
        <p>{visited ? "I have visited this country" : "Not visit"}</p>
      </div>
    </div>
  );
}
