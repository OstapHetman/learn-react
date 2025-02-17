import React, { Component } from 'react'
import axios from 'axios';
import Moment from 'react-moment'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {},
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            this.setState({ lyrics: res.data.message.body.lyrics })

            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        })
        .then(res => {
            this.setState({ track: res.data.message.body.track })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { track, lyrics } = this.state;

        if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
            return <Spinner/>
        } else {
            return (
                <>
                    <Link to="/" className className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <div className="card-text">{lyrics.lyrics_body}</div>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID: </strong> {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre: </strong>  {track.primary_genres.music_genre_list.length !== 0
                            ? track.primary_genres.music_genre_list[0].music_genre
                                .music_genre_name
                            : 'N/A'}
                        </li>
                        <li className="list-group-item">
                            <strong>Excplicit Words: </strong>
                            {track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Relase Data: </strong>
                            <Moment format="DD.MM.YYYY">{track.first_relase_date}</Moment>
                        </li>
                    </ul>
                </>
            )
        }
    }
}

export default Lyrics;
