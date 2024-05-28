import React from "react";
import { useConverter } from "./converterContext";

const BoilingPointChecker = () => {
  const { checkBoilingPoint } = useConverter();

  return (
    <div className="boiling-point">
      <p>{checkBoilingPoint()}</p>
    </div>
  );
};

export default BoilingPointChecker;