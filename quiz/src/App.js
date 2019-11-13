import React, {Component} from 'react';
import './App.css';
import { Container, Row, Button } from 'react-bootstrap';

import Navigation from './layout/Navigation'
import Form from './components/Form';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 })
  }

  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Container>
          <Row>
            <Form actualStep={this.state.step}/>
          </Row>
          <Row>
            <Button className="mt-4" onClick={this.nextStep} variant="primary" size="lg">Next Step</Button>
            {this.state.step > 1 ? <Button className="ml-2 mt-4" onClick={this.previousStep} variant="secondary" size="lg">Previous Step</Button> : null}
          </Row>
        </Container>
      </div>
    );
  }
}