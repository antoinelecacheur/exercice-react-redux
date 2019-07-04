import React from 'react'

export default class Compteur extends React.Component {

    incrementer = () => {
        this.props.increment()
    }

    decrementer = () => {
        this.props.decrement()
    }

    render() {
        return (
            <div>
                <button onClick={this.decrementer}>Décrémenter</button>
                <span>Mon compteur : {this.props.cpt} </span>
                <button onClick={this.incrementer}>Incrémenter</button>
            </div >
        )
    }
}