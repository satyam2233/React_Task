import React, { Component } from 'react'
import {
  Form,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  Panel,
  Well,
  Fade,
  Collapse,
  ButtonToolbar
} from 'react-bootstrap'
import Textdisplay from './TextDisplay.js'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Hello World'
    }
  }
  handleTextbox(e) {
    e.target.value = e.target.value.replace(' ', '\n').replace(',', '')
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Input</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            cols="20"
            onKeyDown={this.handleTextbox}
            value={this.state.value}
          />
        </Form.Group>
      </Form>
    )
  }
}

export default Input
