import { createStore } from "redux";

import reducer from "./reducer/reducer";

const store = createStore(
  reducer,
  // Nécessaire pour pouvoir utiliser l'extension Redux Devtools dans Firefox ou Chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;