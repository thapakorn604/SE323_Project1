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
                                    <h1 className="is-size-4 has-text-weight-bold">What's new ?</h1>
                                    <div className="content">
                                        <ul>
                                            <li><a>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
                                            <li><a> Integer eu sagittis augue, sed suscipit felis. Curabitur rutrum ligula eu sem viverra aliquam.</a></li>
                                            <li><a>Duis vel quam at lacus varius commodo. Ut tortor purus, gravida ut nibh vitae, suscipit blandit sapien.</a></li>
                                            <li><a>Aliquam et diam blandit, gravida diam in, tincidunt elit.</a></li>
                                            <li><a>Etiam ac ante pellentesque, tempor quam non, porttitor ipsum. </a></li>
                                            <li><a>Nullam eu justo ultrices, dictum tellus sit amet, fringilla eros.</a></li>
                                            <li><a>Proin ultrices lacinia nisi, eu rhoncus sapien consectetur in.</a></li>
                                            <li><a>Donec ornare, sapien ut fringilla tincidunt, ligula ex lobortis ex, sit amet pretium nunc ex sodales magna.</a></li>
                                            <li><a>Proin maximus convallis nibh et suscipit.</a></li>
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