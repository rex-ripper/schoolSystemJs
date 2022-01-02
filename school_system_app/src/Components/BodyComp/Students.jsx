import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

export class Students extends Component {


    constructor(props) {
        super(props);
        this.state = { students: [] }
    }

    async getStudents() {
       await fetch('http://localhost:4000/Academic/Students')
            .then(response => response.json())
            .then(items => { this.setState({ students: items }); });
    }

    componentDidMount() {
        this.getStudents();
    }

    componentDidUpdate() {
        this.getStudents();
    }


    render() {
        const {students} = this.state;

        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th> ID </th>
                            <th>Full Name</th>
                            <th>Class Name</th>
                            <th>Graduation Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key = {student._id}>
                                
                                
                                <td>{student._id}</td>
                                <td>{student.Name}</td>
                                <td>{student.ClassOf}</td>
                                <td>{student.IsGraduated}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}