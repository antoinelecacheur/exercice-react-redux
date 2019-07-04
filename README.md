
# Redux

Redux va gérer les états de l'application.

## Principe de base

- On veut stocker l'état global de l'application (state des composants, actions qui modifient ces états) à un endroit unique, accessible partout dans l'application.
- Pour cela, on définit un **store**, qui stocke tout ces états.
- On définit des **actions**, qui vont décrire très simplement ce qui se déroule. Exemple : on rajoute un item à une liste de shopping.
- On définit un **reducer** qui associe à une action un état différent (ajouter un objet, supprimer, etc).
- Dans mon composant React, j'associe le store et les actions sous forme de props. Cela permet de récupérer l'état du store, et de le modifier.

![Diagramme Redux](./public/redux-principle.png)

## Mise en pratique
- Pour conserver une trace de ce que vous avez fait vous pouvez forker le projet (fork en haut de la page), puis cloner le fork sur votre machine :
```
git clone <votre url ssh avec votre idep>
```

- Dans votre répertoire `exercice-react-redux` nouvellement créé, installez les dépendances (`redux`et `react-redux` entre autres) et lancez l'application :

```
npm install
npm start
```

## Exercice 1 - Se familiariser avec Redux

- Il faut d'abord rajouter un Provider, qui va englober notre appli pour la faire communiquer avec le store.

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- Ensuite on définit notre store (par exemple dans un dossier src/redux ) :

```javascript
// store.js
import { createStore } from "redux";

import reducer from "./reducer/reducer";

const store = createStore(
  reducer,
  // Nécessaire pour pouvoir utiliser l'extension Redux Devtools dans Firefox ou Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

- On définit des actions (par exemple dans un dossier src/redux/actions)

```javascript
// actions.js
export const SET_TEXT = "SET_TEXT";
export const setText = payload => {
  return { type: SET_TEXT, payload };
};

// Où payload correspond à l'information qu'on veut transmettre, ici du texte, mais ça peut très bien être un objet {id: 1, nom: "Name" } etc.
```

- On gère cette action au sein d'un reducer (dossier src/redux/reducer), en même temps que l'on définit un état initial pour le store :

```javascript
// reducer.js

import { SET_TEXT } from "../actions/actions.js";

// On définit l'état initial associé à ce reducer, c'est l'état initial qu'on aura dans le store
const initialState = {
  text: "Texte vide"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      // On renvoie un NOUVEL état, pour ne pas modifier l'ancien, ce qui permet d'avoir un historique des actions et des états

      return { ...state, text: action.payload };

    // Le spread iterator (...state) renvoie le contenu du state avant d'avoir effectué l'action, ensuite on rajoute à cet état un attribut text (qui existait dans l'état initial et est donc remplacé)
    default:
      return state;
  }
};

export default reducer;
```

- Exemple simple avec un composant App qui contient le texte et un bouton pour le modifier :

```javascript
// App.js
import React from "react";

class App extends React.Component {
  modifierTexte = () => {
    // Ici on va rajouter notre action setText(payload)
  };

  render() {
    return (
      <div>
        <span>Texte qu'on introduira ensuite</span>
        <button onClick={this.modifierTexte}>Modifier le texte</button>
      </div>
    );
  }
}

export default App;
```

- A ce stade, on n'a pas encore fait le lien entre notre composant `<App/>` et le store. Pour cela, on va utiliser la fonction `connect` de react-redux, et ses deux paramètres (également des fonctions) : `mapStateToProps` et `mapDispatchToProps`.
  Connect va en fait englober notre composant `App`, et lui apporter un lien avec le store à travers ses deux fonctions paramètres.

```javascript
// App.js
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

  modifierTexte = () => {
    // Ici on va rajouter notre action setText(payload)
    // On appelle notre fonction passée en props.
    this.props.changerTexte("Nouveau texte")
  }

  render() {
    return (
      <div>
      {/* mapStateToProps envoie text dans les props du composant */}
        <span> { this.props.text } </span>
        <button onClick={this.modifierTexte}>Modifier le texte</button>
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
```

- Vous devriez avoir quelque chose qui fonctionne ! Vous pouvez adapter l'exemple pour, par exemple, taper du texte dans une balise `<input type='text' />`, que vous allez conserver dans le state de App, puis que vous utiliserez lors du clic sur le bouton.
- Sauvegardez votre travail puis passez sur la branche où se situe la correction :
```
git add .
git commit -m "<votre message de commit>"
git push
git checkout exo1-corr
```

## Exercice 2 - Higher-Order Component et CombineReducers


- Récupérez le code de l'exo 2
```
git checkout exo2
```

- Regardons un moment une autre manière d'obtenir la page de l'exercice 1. On a la même implémentation que précédemment mais dans un composant à part : `TextComponent`. Ce composant n'interagit pas directement avec le store, on a retiré les méthodes `mapStateToProps`, `mapDispatchToProps` et `connect` pour le mettre dans un **Container**. C'est le pattern du Higher-Order Component ([HOC](https://reactjs.org/docs/higher-order-components.html)).

- Dans un premier temps, ce pattern peut sembler agaçant, il rajoute encore une couche d'abstraction. Toutefois, il permet de séparer distinctement le composant générique `TextComponent` qui ne fait que recevoir des props. Tandis que le **Container** ne fait que la liaison avec le store. C'est ainsi plus facile de modifier l'implémentation liée à redux.

- On s'apprête à utiliser plusieurs reducers distincts par la suite qui concerneront différents composants, je vous propose d'adopter une nouvelle organisation des fichiers côté redux.

```
git checkout exo2-part2
```

## Exercice 3 - Redux thunk, effectuer ses appels à une API depuis le store
- redux-thunk permet, entre-autres, d'introduire de la logique asynchrone dans le store. La dépendance redux-thunk est déjà installée sur le projet (vous pouvez la trouver dans le package.json).
- Partons d'une application React de base, qui récupère déjà des données via fetch :



