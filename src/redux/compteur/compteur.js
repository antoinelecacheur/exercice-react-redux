import * as actions from "../compteur/compteur.actions";

const initialState = {
    cpt: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, cpt: state.cpt + 1 };
        case actions.DECREMENT:
            return { ...state, cpt: state.cpt - 1 }
        default:
            return state;
    }
};

export default reducer;