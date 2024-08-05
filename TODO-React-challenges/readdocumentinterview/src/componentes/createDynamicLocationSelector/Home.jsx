import { useState } from "react";

const Home = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const countries = Object.keys(data.countries);

  const states = Object.keys(data.states).filter(
    (state) => data.states[state].country === selectedCountry
  );

  const cities = Object.keys(data.cities).filter(
    (city) =>
      data.cities[city].country === selectedCountry &&
      data.cities[city].state === selectedState
  );

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="" hidden>
          Select Country
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        value={selectedState}
        onChange={handleStateChange}
        disabled={!selectedCountry}
      >
        <option value="" hidden>
          Select State
        </option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedState}
      >
        <option value="" hidden>
          Select City
        </option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Home;
