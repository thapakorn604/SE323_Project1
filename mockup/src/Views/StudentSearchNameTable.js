import React, { Component } from 'react'
import { Button } from 'reactbulma'

class StudentSearchNameTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                        <td></td>
                        <td>Tennis for life and exercise</td>
                        <td>Lect.Pakorn Tuisry</td>
                        <td>1</td>
                        <td>Wednesday</td>
                        <td>17.00 - 18.00</td>
                        <td>25</td>
                        <td>20</td>
                        <td><Button primary onClick={this.handleAdd}>ADD</Button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default StudentSearchNameTable;