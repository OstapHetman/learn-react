import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, Row, Col, Form } from 'react-bootstrap';

export default class CheckBoxType extends Component {
    constructor(props) {
        super(props)
    }

    checkAnswer = (e) => {
        let answer = {
            key: 2,
            name: e.target.name,
            value: e.target.value
        }
        this.props.onSelectAnswer(answer)
    }

    render() {
        const answersArr = this.props.data;

        return (
            <Form>
                <h3 className="my-4">{answersArr[0].questionTitle}</h3>
                <Row>
                    
                    {answersArr[0].answers.map(item => (
                        <Col key={item.answer}>
                            <Card className="question-card">
                                <Card.Img variant="top" src={item.imgUrl} />
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

CheckBoxType.propTypes = {
    data: PropTypes.array,
    onSelectAnswer: PropTypes.func
};