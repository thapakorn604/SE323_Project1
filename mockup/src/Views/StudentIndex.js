import React, { Component } from 'react'
import StudentNav from './StudentNav'
import user from '../Images/user.png'
import Style from './style.css'

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
                        <div className="columns">
                            <div className="column is-one-third">
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
                            <div className="column">
                                <h1 className="has-text-centered is-size-4">Enrolled Course(s) </h1>
                                <hr />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default StudentIndex;
