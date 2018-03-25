import React, { Component } from 'react'
import { Button } from 'reactbulma'

class StudentSearchNotfound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                </table>
            </div>
        )
    }
}

export default StudentSearchNotfound;