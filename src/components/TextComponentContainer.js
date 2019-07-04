
import { connect } from 'react-redux';
import * as textComponent from '../redux/textComponent/index';
import TextComponent from './TextComponent';

const mapStateToProps = state => {
    return {
        /* Ici on doit rajouter textComponent à cause du combineReducer
        En regardant avec les redux devtools on voit bien que c'est le chemin à utiliser pour accéder à text
        */
        text: state.textComponent.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changerTexte: (text) => {
            dispatch(textComponent.setText(text))
        }
    }
}

// Ici on exporte le composant TextComponent connecté au store, il reçoit donc bien les props text et changerTexte(text)

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent)