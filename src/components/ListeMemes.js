import React from 'react'

export default class ListeMemes extends React.Component {
    state = {
        memes: [],
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    // Les attributs data et memes sont propres à l'API utilisée, regarder le retour au format json pour s'en rendre compte
                    memes: json.data.memes
                })
            })
    }

    render() {
        const { memes } = this.state
        return (
            <div>
                <ul>
                    {memes.map(meme =>

                        <li key={meme.id}>
                            <span>{meme.name}</span>
                            <img src={meme.url} alt="Memes" />
                        </li>
                    )
                    }
                </ul>
            </div>
        )
    }
}