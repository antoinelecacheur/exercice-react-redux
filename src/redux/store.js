import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import listeMemes from './listeMemes/index';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ...{ listeMemes }
}
)

// Nécessaire pour utiliser les devtools et pouvoir également utiliser thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;