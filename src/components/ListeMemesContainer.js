import {connect} from 'react-redux'
import * as listeMemes from './../redux/listeMemes';
import ListeMemes from './ListeMemes';

const mapStateToProps = state => {
    return {
        memes: state.listeMemes.memes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            // On récupère notre fonction getMemes() comme on le faisait déjà avec une action normale
            dispatch(listeMemes.getMemes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListeMemes)
