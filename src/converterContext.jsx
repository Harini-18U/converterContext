import React, { createContext, useContext, useState } from "react";
import "./converter.css";

const ConverterContext = createContext();

export const useConverter = () => useContext(ConverterContext);

export const ConverterProvider = ({ children }) => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertCelsiusToFahrenheit = (celsius) => {
    if (!isNaN(celsius) && celsius !== "") {
      const convertedTemp = (celsius * 9/5) + 32;
      setFahrenheit(convertedTemp.toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const convertFahrenheitToCelsius = () => {
    if (!isNaN(fahrenheit) && fahrenheit !== "") {
      const convertedTemp = (fahrenheit - 32) * 5/9;
      setCelsius(convertedTemp.toFixed(2));
    } else {
      setCelsius("");
    }
  };

  const checkBoilingPoint = () => {
    const boilingPointCelsius = 100;
    const boilingPointFahrenheit = 212;

    if (celsius >= boilingPointCelsius) {
      return "The water would boil";
    } else if (fahrenheit >= boilingPointFahrenheit) {
      return "The water would boil";
    } else {
      return "The water would not boil";
    }
  };

  return (
    <ConverterContext.Provider value={{ celsius, setCelsius, fahrenheit, setFahrenheit, convertCelsiusToFahrenheit, convertFahrenheitToCelsius, checkBoilingPoint }}>
      {children}
    </ConverterContext.Provider>
  );
};