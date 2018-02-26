import React, { Component } from 'react';
import LecturerNav from './LecturerNav';
import LecturerGradingTable from '../Views/LecturerGradingTable';
import { Box } from 'reactbulma';
import LecturerGradingSum from '../Views/LecturerGradingSum';

class LecturerGrading extends Component {
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
                                    <p className="panel-heading">Course</p>
                                    <div>
                                        <a className="panel-block is-active">
                                            <span className="panel-icon"></span>
                                            953102
                                        </a>
                                        <a className="panel-block">
                                            <span className="panel-icon"></span>
                                            953212
                                        </a>
                                    </div>
                                </Box>
                            </div>
                            <div className="column">
                                <Box>
                                    <LecturerGradingTable />
                                </Box>
                                <Box>
                                    <LecturerGradingSum />
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LecturerGrading;