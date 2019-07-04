
import { connect } from 'react-redux';
import * as compteur from '../redux/compteur/index';
import Compteur from './Compteur';

const mapStateToProps = state => {
    return {
        // Cette fois c'est via le reducer compteur qu'on accès à l'attribut cpt dans le store
        cpt: state.compteur.cpt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(compteur.plus())
        },
        decrement: () => {
            dispatch(compteur.minus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compteur)