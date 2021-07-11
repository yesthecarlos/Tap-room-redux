import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                  formVisibleOnPage: false });
  }

  handleDecrementingPints = () => {
    this.setState(prevState => ({ 
      pints: this.state.pints - 1
    }));
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let sellPintButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
      buttonText = "Add Keg";
      sellPintButton = <button onClick={this.handleDecrementingPints}>Sold a pint!</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {sellPintButton}
        <button onClick={this.handleClick}>{buttonText}</button>
        
      </React.Fragment>
    );
  }
}

export default KegControl;