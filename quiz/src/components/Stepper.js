import React, { Component } from 'react'

export default class Stepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [
                { no: 1, active: true},
                { no: 2, active: false},
                { no: 3, active: false},
                { no: 4, active: false},
                { no: 5, active: false}
            ],
        };
    }

    render() {
        const { steps }  = this.state

        return (
            <div>
                hello from Stepper
            </div>
        )
    }
}
