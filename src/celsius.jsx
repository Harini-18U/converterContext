import React from "react";
import { useConverter } from "./converterContext";

const CelsiusInput = () => {
  const { celsius, setCelsius, convertCelsiusToFahrenheit } = useConverter();

  const handleChange = (e) => {
    setCelsius(e.target.value);
    convertCelsiusToFahrenheit(e.target.value);
  };

  return (
    <div className="form-group">
      <label>Enter temperature in Celsius:</label>
      <input
        type="text"
        value={celsius}
        onChange={handleChange}
      />
    </div>
  );
};

export default CelsiusInput;