import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.readInput = this.readInput.bind(this);
    }

    readInput(event) {
        this.setState({ [event.target.name]: event.target.value })
        event.preventDefault();
    }

    addEmployee = () => {
        const newEmployee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }
        console.log(newEmployee)
        axios.post("http://localhost:9090/api/v1/employees", newEmployee)
            .then(res => console.log(res))
    }

    render() {
        return (
            <Container style={{ marginTop: '100px' }}>
                <h1>Add Employee</h1>
                <Form style={{ margin: '100px' }}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Enter First Name" name="firstName" onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Enter Last Name" name="lastName" onChange={this.readInput} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Enter Email" name="emailId" onChange={this.readInput}/>
                        </Col>
                    </Row>
                    <Link to="/"><Button style={{ margin: '5px', float: 'right' }} variant="danger">Cancel</Button></Link>
                    <Button onClick={this.addEmployee} style={{ margin: '5px', float: 'right' }} variant="success" >Add Employee</Button>
                </Form>
            </Container>
        )
    }
}