import { createStore, combineReducers } from "redux";
import listeMemes from './listeMemes/index';

const rootReducer = combineReducers(
  ...{ listeMemes }
)

const store = createStore(
  rootReducer,
  // Nécessaire pour pouvoir utiliser l'extension Redux Devtools dans Firefox ou Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;