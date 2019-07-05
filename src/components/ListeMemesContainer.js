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
            dispatch(listeMemes.getMemes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListeMemes)
