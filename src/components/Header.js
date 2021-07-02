import React from "react";
import beerImage from "./../img/beer.png";

function Header() {
  return (
    <>
    <h1>Tap Room</h1>
    <img src={beerImage} alt="A glass of beer" />
    </>
  );
}

export default Header;