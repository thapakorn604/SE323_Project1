import React, { Component } from 'react'
import LecturerNav from '../Views/LecturerNav'
import LecturerIndexTable from './LecturerIndexTable'
import user from '../Images/user.png'
import { Box } from 'reactbulma'

class LecturerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <LecturerNav />
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-third">
                                <Box>
                                    <div className="card-content is-flex is-horizontal-center">
                                        <figure className="image is-128x128">
                                            <img src={user} />
                                        </figure>
                                    </div>
                                    <div className="has-text-centered">
                                        <p><strong>Name : </strong>Noppon Coosri</p>
                                        <p><strong>Faculty : </strong>College of Art, Media and Technology</p>
                                        <p><strong>Major : </strong>Software Engineering</p>

                                    </div>
                                </Box>
                            </div>
                            <div className="column">
                                <Box>
                                    <h1 className="has-text-centered is-size-4">2/60 Teaching Course(s)</h1>
                                    <hr />
                                    <LecturerIndexTable />
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LecturerIndex;
