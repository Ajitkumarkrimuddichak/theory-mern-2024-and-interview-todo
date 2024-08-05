import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Patna", "Delhi", "Mumbai", "Bengaluru"],
  },
  {
    name: "Nepal",
    value: "NE",
    cities: ["Kathmandu", "Janakpur", "Pahari"],
  },
  {
    name: "Sri Lanka",
    value: "SH",
    cities: ["Ravanpur", "Koli", "Tinai"],
  },
];

const CountryStateFind = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <h4>You have Select Countery like Dropdown and State Hide </h4>
      {/* 1st DropDown */}
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        <option value="">Select Country</option>
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* 2nd DropDown */}
      {country !== "" && (
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="">Select City</option>
          {countries[country].cities.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default CountryStateFind;
