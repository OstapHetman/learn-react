import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Row, Col, Form } from 'react-bootstrap';

export default class CheckBoxNoImageType extends Component {
    constructor(props) {
        super(props)
    }

    checkAnswer = (e) => {
        let answer = {
            key: 3,
            name: e.target.name,
            value: e.target.value
        }
        this.props.onSelectAnswer(answer)
    }

    render() {
        const answersArr = this.props.data;

        return (
            <Form className="w-100">
                <h3 className="my-4">{answersArr[0].questionTitle}</h3>
                <Row>
                    
                    {answersArr[0].answers.map(item => (
                        <Col xs={12} key={item.answer}>
                            <Card className="question-card w-100">
                                <Card.Body>
                                    <Form.Check 
                                        type='checkbox'
                                        id={item.answer}
                                        label={item.answer}
                                        name={answersArr[0].questionTitle}
                                        value={item.answer}
                                        onChange={(e) => this.checkAnswer(e)}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    
                </Row>
            </Form>
        )
    }
}

CheckBoxNoImageType.propTypes = {
    data: PropTypes.array,
    onSelectAnswer: PropTypes.func
};