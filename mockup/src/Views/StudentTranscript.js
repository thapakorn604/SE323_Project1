import React, { Component } from 'react'
import StudentNav from '../Views/StudentNav'
import StudentGradeSum from '../Views/StudentGradeSum'
import StudentGradeResult from '../Views/StudentGradeResult'
import { Box,Button } from 'reactbulma'

class StudentTranscript extends Component {
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

                        <div className="column">
                            <Box>
                                <h1 className="has-text-centered is-size-3 has-text-weight-bold">2/60 Result</h1>
                                <hr />
                                <h1 className="has-text-centered is-size-4 has-text-weight-bold">Current semester summary</h1>
                                <StudentGradeSum enrolled="19" recv="16" gpa="3.43" />
                                <h1 className="has-text-centered is-size-4 has-text-weight-bold">All semesters summary</h1>
                                <StudentGradeSum enrolled="96" recv="96" gpa="3.41" />
                                <hr />
                                <h1 className="has-text-centered is-size-4 has-text-weight-bold">Grading Result</h1>
                                <StudentGradeResult />
                            </Box>
                            <Button> See other semesters </Button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default StudentTranscript;