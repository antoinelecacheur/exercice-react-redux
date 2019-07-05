import * as actions from './listeMemes.actions'

const initialState = {
    memes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LISTE_MEMES_GET:
            return { ...state, memes: action.payload }
        default:
            return state
    }
}

export default reducer