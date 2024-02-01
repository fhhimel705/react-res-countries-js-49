import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="div-grid">
      {countries.map((country) => (
        <Country
          country={country}
          key={country.cca2}
        ></Country>
      ))}
    </div>
  );
};

// const countryDetails = (props) => {
//   return (
//     <div className="defaul_style ">
//       <h2>Country : {props.name.common}</h2>
//       <h3>Capital : {props.capital} </h3>
//       <img src={props.flags.png} alt="" />
//     </div>
//   );
// };

export default Countries;
