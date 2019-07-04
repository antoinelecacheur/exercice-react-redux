import React from 'react'
import TextComponentContainer from './components/TextComponentContainer';
import CompteurContainer from './components/Compteur/CompteurContainer';

export default class App extends React.Component {


  render() {
    return (
      <>
        <TextComponentContainer />
        <CompteurContainer />
      </>
    )
  }

}