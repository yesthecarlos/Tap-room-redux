import React from "react";
import { v4 } from 'uuid';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.alcohol.value);
    console.log(event.target.price.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='text'
          name='alcohol'
          placeholder='Alcohol Content' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <button type='submit'>Add this Keg!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;