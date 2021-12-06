import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    axios.get(`http://localhost:9090/api/v1/employees`)
      .then(res => {
        console.log(res.data)
        this.setState({ employees: res.data });
      })
  }

  deleteById = (id) => {
    axios.delete(`http://localhost:9090/api/v1/employees/${id}`)
    .then(res =>  { 
        let employeeList = this.state.employees.filter(e => {
            return e._id !== id
        })
        this.setState({...this.state, employees: employeeList})
    })
}
  render() {
    return (
      <Container style={{ marginTop: '50px' }}>
        <h1>Employees List</h1>
        <Link to="/add"><Button variant="success" Link to={`/add`} style={{ float: 'right'}}>Add a Employee</Button></Link>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Email</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.employees.map(e => (
                <>
                  <tr>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.emailId}</td>  
                    <td>
                      <Link to={`/update/${e._id}`}><Button style={{ margin: '5px'}} variant="primary">Update</Button></Link>
                      <Link to={`/view/${e._id}`}><Button style={{ margin: '5px'}} variant="secondary">Details</Button></Link>
                      <Button onClick={() => this.deleteById(e._id)} style={{ margin: '5px'}} variant="danger">Delete</Button>
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </Table>
      </Container>

    )
  }
}
