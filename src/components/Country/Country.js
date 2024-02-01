import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  console.log(props);
  const { name, area, capital, flags } = props.country;
  return (
    <div className="div_style">
      <h1>Name : {name.common} </h1>
      <h2>Capital : {capital} </h2>
      <p>Area : {area} </p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
