import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt='Spinner'
        style={{ width: "auto", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;
