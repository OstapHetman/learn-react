import React, { Component } from 'react'
import RadioType from './QuestionsType/RadioType'
import CheckBoxType from './QuestionsType/CheckBoxType'
import CheckBoxNoImageType from './QuestionsType/CheckBoxNoImageType';
import PropTypes from 'prop-types';
import content from '../content/content'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
           content: content,
           answersArr: [],
        }
    }

    selectedAnswer = async (answer) => {
        await this.setState({ answersArr: [...this.state.answersArr, answer] })
    }

    render() {
        const { content, answersArr } = this.state
        const { actualStep } = this.props

        switch (actualStep) {
            case 1: return (
                <RadioType data={content.questionNo1} answer={answersArr} onSelectAnswer={(answer) => this.selectedAnswer(answer)}/>
            )
            case 2: return (
                <CheckBoxType data={content.questionNo2} answer={answersArr} onSelectAnswer={(answer) => this.selectedAnswer(answer)}/>
            )
            case 3: return (
                <CheckBoxNoImageType data={content.questionNo3} answer={answersArr} onSelectAnswer={(answer) => this.selectedAnswer(answer)}/>
            )
        }
    }
}

Form.propTypes = {
    actualStep: PropTypes.number
}