import React from 'react'

export default class ListeMemes extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        const { memes } = this.props
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