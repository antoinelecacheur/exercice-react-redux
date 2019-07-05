import { createStore, combineReducers } from "redux";

import textComponent from './textComponent/index';

const rootReducer = combineReducers({
  textComponent,
})

const store = createStore(
  rootReducer,
  // Nécessaire pour pouvoir utiliser l'extension Redux Devtools dans Firefox ou Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;