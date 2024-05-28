import React from "react";
import { useConverter } from "./converterContext";

const FahrenheitInput = () => {
  const { fahrenheit, setFahrenheit, convertFahrenheitToCelsius } = useConverter();

  const handleChange = (e) => {
    setFahrenheit(e.target.value);
    convertFahrenheitToCelsius(e.target.value);
  };

  return (
    <div className="form-group">
      <label>Enter temperature in Fahrenheit:</label>
      <input
        type="text"
        value={fahrenheit}
        onChange={handleChange}
      />
    </div>
  );
};

export default FahrenheitInput;