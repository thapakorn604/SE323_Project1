import React, { Component } from 'react'
import StudentNav from '../Views/StudentNav'
import StudentAddCourseTable from '../Views/StudentAddCourseTable'
import { Box, Field, Button } from 'reactbulma'


class StudentEnroll extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <StudentNav />
                <div className="section">
                    <div className="container">
                        <Box>
                            <Field grouped>
                                <p className="control">
                                    <span className="select">
                                        <select>
                                            <option>Course ID</option>
                                            <option>Course Name</option>
                                        </select>
                                    </span>
                                </p>
                                <div className="control is-expanded">
                                    <input className="input" type="text" placeholder="Course ID or Course Name"></input>
                                </div>
                                <div className="control">
                                    <Button info> Search </Button>
                                </div>
                            </Field>
                        </Box>

                        <Box>
                            <StudentAddCourseTable />
                        </Box>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentEnroll;