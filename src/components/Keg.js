import React from "react";

function Keg() {
  const kegName = "SpaceRace";
  const kegName2 = "Eureka";
  return (
    <React.Fragment>
      <h3>Kegs</h3>
      <h3>{kegName} and {kegName2}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;