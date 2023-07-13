import React from "react";
import { useState } from "react";

export default function Practice2() {
  const [brand, setBrand] = useState("QWERTY");
  const [model, setModel] = useState("ASDFGH");
  const [year, setYear] = useState("02");
  const [color, setColor] = useState("idk");
  const myStyle ={
    margin:"2px",
    color:"yellow",
    backgroundColor:"black"
  };
 
  return (
    <div>
      <h1>
        I drive a {brand} {model} in colour {color} and it is of model year {year}.
      </h1>

      <button style={myStyle}
        type="button"
        onClick={() => {
          setBrand("Merc");
          setModel("E-Class");
          setYear("2023");
          setColor("white");
        }}
      >Option1
      </button>
      <button style={myStyle}
        type="button"
        onClick={() => {
          setBrand("BMW");
          setModel("M5");
          setYear("2023");
          setColor("Nardo grey");
        }}
      >Option2
      </button>
      <button style={myStyle}
        type="button"
        onClick={() => {
          setBrand("Audi");
          setModel("S5");
          setYear("2023");
          setColor("Matte black");
        }}
      >Option3
      </button>
    </div>
  );
}
