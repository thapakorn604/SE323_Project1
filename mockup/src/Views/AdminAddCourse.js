import React, { Component } from 'react'
import AdminNav from '../Views/AdminNav'
import { Button, Box } from 'reactbulma'
import {Redirect} from 'react-router-dom'

class AdminAddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleSubmit() {
        if (window.confirm("Are you sure to add this course") == true) {
            window.alert("Successfully added!");
            <Redirect to='/admin/index'/> 
        }
    }

    handleCancel() {
        <Redirect to='/admin/index' />
    }

    render() {
        return (
            <div>
                <AdminNav />
                <section className="section">
                    <Box>
                        <h1 className="has-text-centered is-size-4 has-text-weight-bold">Add Course</h1>
                        <hr />
                        <div className="columns">
                            <div className="column is-4">
                                <div className="field">
                                    <label className="label">Course ID</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="e.g 953234"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Course Name</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="e.g. Computer Programming"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Lecturer(s)</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="e.g. Thapakorn Tuwaemuesa,Thanawat Lukuan"></input>
                                        <p className="help is-info">**If the courese has more than 1 lecturer, use comma(,) to separate each lecturer name.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Semester(s)</label>
                                    <div className="control">
                                        <div className="select select">
                                            <select>
                                                <option>1/2560</option>
                                                <option>2/2560</option>
                                                <option>3/2560</option>
                                                <option>Only 1&2/2560</option>
                                                <option>All of Academic year 2560</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Seat(s)</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="e.g.50"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Credit(s)</label>
                                    <div className="control">
                                        <input className="input" type="number" placeholder="e.g.3"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-grouped is-grouped-centered">
                            <div className="control">
                                <button className="button is-success" onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-danger" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </Box>
                </section>
            </div>
        )
    }
}

export default AdminAddCourse;