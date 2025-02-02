import React, { useEffect, useState } from "react";
// import rgbToHex from "./Utils";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    },3000)
    return () => clearTimeout(timeout)
  },[alert])

  return (
    <article className={`color `} style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className="percent-values">{weight} %</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
