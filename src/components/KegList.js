import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    name: 'Space Race',
    brand: 'Hoodinville',
    price: 5,
    alcoholContent: 7,
    pintsLeft: 124
  },
  {
    name: 'Perseus',
    brand: 'Ishtar Brews',
    price: 7,
    alcoholContent: 9,
    pintsLeft: 56
  },
  {
    name: 'Hunter',
    brand: 'TopBrews',
    price: 8,
    alcoholContent: 6,
    pintsLeft: 79
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr />
      {masterKegList.map((keg, index) =>
      <Keg name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pintsLeft={keg.pintsLeft}/>
      )}
    </React.Fragment>
  );
}

export default KegList;