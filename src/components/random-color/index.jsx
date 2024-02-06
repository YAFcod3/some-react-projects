import React, { useEffect, useState } from "react";




const RandomColor = () => {


  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");



  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  function handleCreateHexRandomColor() {
    //   const hexChars = "0123456789ABCDEF";
    // let randomColor = "#";

    // for (let i = 0; i < 6; i++) {
    //   randomColor += hexChars[Math.floor(Math.random() * 16)];
    // }

    //***********another way ********* */
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    const newHex = [...Array(6)].map(() => hex[randomColorUtility(hex.length)]);

    let colorHEX = "#" + newHex.join("");
    // console.log(colorHEX);
    setColor(colorHEX);
  }

  function handleCreateRgbRandomColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateHexRandomColor();
    } else handleCreateRgbRandomColor();
  }, [typeOfColor]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (typeOfColor === "hex") {
  //       handleCreateHexRandomColor();
  //     } else {
  //       handleCreateRgbRandomColor();
  //     }
  //   }, 1000); // Cambia el intervalo según tus necesidades

  //   return () => clearInterval(intervalId);

  // }, [typeOfColor]);

  return (
    <div
      className=""
      style={{ backgroundColor: color, height: "100vh", width: "100%" }}
    >
      <div style={{display:'flex',justifyContent:'center'}}>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color </button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateHexRandomColor
              : handleCreateRgbRandomColor
          }
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          width: "100%",
          // height:"100%"
        }}
      >
        <h2>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h2>
        <h2> {color}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
