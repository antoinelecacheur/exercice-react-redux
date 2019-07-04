import * as actions from "../textComponent/textComponent.actions";

// On définit l'état initial associé à ce reducer, c'est l'état initial qu'on aura dans le store
const initialState = {
  text: "Texte vide"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TEXT:
      // On renvoie un NOUVEL état, pour ne pas modifier l'ancien, ce qui permet d'avoir un historique des actions et des états

      return { ...state, text: action.payload };

    // Le spread iterator (...state) renvoie le contenu du state avant d'avoir effectué l'action, ensuite on rajoute à cet état un attribut text (qui existait dans l'état initial et est donc remplacé)
    default:
      return state;
  }
};

export default reducer;