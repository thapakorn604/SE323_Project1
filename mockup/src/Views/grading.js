import React, { Component } from 'react';
import LecturerNav from './LecturerNav';
import ADT from './ADT';
import { Box } from 'reactbulma';
import Database from './Database';

class grading extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() { 
        return (
            <div>
            <LecturerNav/>
            <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-one-third">
                                <Box>
                                <p class="panel-heading">Course</p>
                                    <div>
                                        <a class="panel-block is-active">
                                            <span class="panel-icon"></span>
                                            953102
                                        </a>
                                        <a class="panel-block">
                                            <span class="panel-icon"></span>
                                            953212
                                        </a>
                                    </div>
                                </Box>
                            </div>
                            <div className="column">
                                <Box>
                                    <ADT />
                                </Box>
                                <Box>
                                <table className="table is-fullwidth">
            <tr className="center-table">
                <th>No.</th>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Credit(s)</th>
                <th>Semester</th>
                <th>Summary GPA</th>
            </tr>
            <tr>
                <td>1</td>
                <td>953102</td>
                <td>ADT and Problem solving</td>
                <td>Monday, Thursday</td>
                <td>09.30-12.00</td>
                <td>3</td> 
                <td>2/60</td>
                <td>3.55</td>
            </tr>
            <tr>
                <td>2</td>
                <td>953212</td>
                <td>Database system and design</td>
                <td>Tuesday, Friday</td>
                <td>12.30-14.30</td>
                <td>3</td> 
                <td>2/60</td>
                <td>3.99</td>
            </tr>
        </table>
                                </Box>
                                {/* <Box><Database/></Box> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         )
    }
}
 
export default grading;