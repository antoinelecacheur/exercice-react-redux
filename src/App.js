import React from 'react'
import {connect} from 'react-redux'
import {setText} from './redux/actions/actions'

/* Cette fonction prend en paramètre state, qui va être associé via connect au state définit dans notre reducer.js (donc dans le store), on récupère directement state.text
La fonction est également appelée à chaque modification du state dans le store

Le lien qui est fait est donc : store -> composant, en passant l'état dans les props (comme l'indique le nom de la fonction)
*/

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

/* Cette fonction prend en paramètre dispatch, qui permet de renvoyer une fonction dans les props. On utilise la fonction setText() des actions, qui va renvoyer une action de type SET_TEXT, avec le text saisi en paramètre. Cette action sera gérée directement dans le reducer (au sein du switch - case).

On définit la fonction changerTexte qui va être envoyée dans les props de notre composant App.
*/

const mapDispatchToProps = dispatch => {
  return {
    changerTexte: (text) => {
      dispatch(setText(text))
    }
  }
}



class App extends React.Component {
  state = {
    monTexte: ""
  }

  modifierTexte = (text) => {
    // Ici on va rajouter notre action setText(payload)
    // On appelle notre fonction passée en props.
    this.props.changerTexte(text)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      {/* mapStateToProps envoie text dans les props du composant */}
        <span> { this.props.text } </span><br/>
        <input type="text" placeholder="Saissez votre texte" onChange={this.handleChange} value={this.state.monTexte} name="monTexte" />
        <button onClick={() => this.modifierTexte(this.state.monTexte)}>Modifier le texte</button>
      </div>
    )
  }

}

// On exporte le composant App connecté :


export default connect(mapStateToProps, mapDispatchToProps)(App);

/* Équivalent à :
const AppConnecte = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConecte;
*/