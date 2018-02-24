import React, { Component } from 'react'
import StudentNav from './StudentNav'
import user from '../Images/user.png'
import Style from './style.css'
import { Box } from 'reactbulma'
import StudentEnrolledTable from './StudentEnrolledTable';

class StudentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <StudentNav />
                <section className="section">
                    <div className="container">
                        <div className="tile is-ancestor">
                            <div className="tile is-4 is-vertical is-parent">
                                <div className="tile is-child box">
                                    <div className="card-content is-flex is-horizontal-center">
                                        <figure className="image is-128x128">
                                            <img src={user} />
                                        </figure>
                                    </div>
                                    <div className="has-text-centered">
                                        <p><strong>Student ID : </strong> 582115015 </p>
                                        <p><strong>Name : </strong> Thapakorn Tuwaemuesa</p>
                                        <p><strong>Faculty : </strong>College of Art, Media and Technology</p>
                                        <p><strong>Major : </strong>Software Engineering</p>
                                        <p><strong>Advisor : </strong>Kittitouch Suteeca</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <div class="tile is-child box">
                                    <h1 className="is-size-4 has-text-weight-bold">Schedule</h1>
                                    <div className="content">
                                        <h3>Midterm examination</h3>
                                        <ul>
                                            <li>952313 : 1st March 2018, 15.00-18.00</li>
                                            <li>208255 : 6th March 2018, 15.00-18.00</li>
                                            <li>953201 : 28th February 2018, 8.00-11.00</li>
                                            <li>001202 : 28th February 2018, 15.00-18.00</li>
                                            <li>207110 : 2nd March2018, 12.00-15.00</li>
                                            <li>751100 : 3rd March2018, 12.00-15.00</li>
                                        </ul>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <Box>
                                <h1 className="has-text-centered is-size-4 has-text-weight-bold">Enrolled Course(s) </h1>
                                <hr />
                                <StudentEnrolledTable />
                            </Box>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default StudentIndex;