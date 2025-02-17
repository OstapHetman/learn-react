import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Track from './Track'

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { track_list, heading } = value;

                    if (track_list === undefined || track_list.lenght === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <>
                                <h3 className="text-cenetr mb-4">{heading}</h3>
                                <div className="row">
                                    {track_list.map(item => <Track key={item.track.track_id} track={item.track} />)}
                                </div>
                            </>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks
