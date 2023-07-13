import React from "react";
import { useState } from "react";

export default function Practise() {
  const [time, setTime] = useState("");
  return (
    <>
      <h1>You like to live in the {time}.</h1>

      <button type="button" style={{margin:"auto",color:"green",width:"300px",borderRadius:"20px",border:"solid black"}} onClick={() => setTime("Future")}>
      option 1
      </button>
      <button type="button" style={{margin:"auto",color:"red",width:"300px",borderRadius:"20px",border:"solid black"}} onClick={() => setTime("Past")}>
      option 2
      </button>
      <button type="button" style={{margin:"auto",color:"gray",width:"300px",borderRadius:"20px",border:"solid black"}} onClick={() => setTime("Present")}>
      option 3
      </button>
    </>
  );
}
