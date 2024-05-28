
import './App.css';
import BoilingPointChecker from './boilingPoint';
import CelsiusInput from './celsius';
import { ConverterProvider } from './converterContext';
import FahrenheitInput from './fahrenheit';

function App() {
  return (
    <ConverterProvider>
      <div className="container">
        <h2>Temperature Converter</h2>
        <CelsiusInput/>
        <FahrenheitInput/>
        <BoilingPointChecker/>
      </div>
    </ConverterProvider>
  );
}

export default App;