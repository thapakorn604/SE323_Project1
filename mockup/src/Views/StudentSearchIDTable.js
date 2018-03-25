import React, { Component } from 'react'
import { Button } from 'reactbulma'

class StudentSearchIDTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        if (window.confirm('Are you sure to add this course ?') == true) {
            window.location.replace('/student/index')
        }
    }
    render() {
        return (
            <div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Lecturer(s)</th>
                            <th>Credit(s)</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Seat(s)</th>
                            <th>Enrolled(s)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tr>
                        <td>953234</td>
                        <td>Programming Methodology</td>
                        <td>Lect.Chardchai Doungsa-ard</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>9.30 - 11.00</td>
                        <td>30</td>
                        <td>30</td>
                        <td><Button primary onClick={this.handleAdd}>ADD</Button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default StudentSearchIDTable;