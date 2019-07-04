
import { connect } from 'react-redux';
import { setText } from '../redux/actions/actions';
import TextComponent from './TextComponent';

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changerTexte: (text) => {
            dispatch(setText(text))
        }
    }
}

// Ici on exporte le composant TextComponent connecté au store, il reçoit donc bien les props text et changerTexte(text)

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent)