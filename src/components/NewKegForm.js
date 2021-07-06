import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value,
    alcohol: event.target.alcohol.value, price: event.target.price.value,
    pints: event.target.pints.value, id: v4()});
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
        <input
          type='text'
          name='pints'
          placeholder='Pints Left' />
        <button type='submit'>Add this Keg!</button>
      </form>
    </React.Fragment>
  );
};

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;