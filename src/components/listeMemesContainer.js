
import { connect } from 'react-redux';
import listeMemes from './listeMemes';
import { setText } from '../redux/actions/actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(listeMemes)