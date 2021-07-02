import React from "react";
import Keg from "./Keg";

function KegList(){
  return (
    <Keg
     name="Space Race"
     brand="Hoodinville"
     price="5"
     alcoholContent="7"
     pintsLeft="124" />
  );
}

export default KegList;