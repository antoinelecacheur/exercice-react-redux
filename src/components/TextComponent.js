import React from 'react'

export default class TextComponent extends React.Component {
    state = {
        monTexte: "",
    }

    modifierTexte = (text) => {
        // Ici on va rajouter notre action setText(payload)
        // On appelle notre fonction passée en props.
        this.props.changerTexte(text)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* mapStateToProps envoie text dans les props du composant */}
                <span> {this.props.text} </span><br />
                <input type="text" placeholder="Saissez votre texte" onChange={this.handleChange} value={this.state.monTexte} name="monTexte" />
                <button onClick={() => this.modifierTexte(this.state.monTexte)}>Modifier le texte</button>
            </div>
        )
    }
}