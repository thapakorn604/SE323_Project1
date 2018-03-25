import React, { Component } from 'react'
import AdminNav from '../Views/AdminNav'
import { Button, Box } from 'reactbulma'
import Style from '../Views/style.css'

class AdminAddCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'',
                        name:'',
                        lecturers:'',
                        seats:'',
                        credits:'',
                        days:'',
                        timefrom:'',
                        timeto:'',
                        semester:'1/2560'}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTimeTo = this.handleTimeTo.bind(this)
        this.handleTimeFrom = this.handleTimeFrom.bind(this)
        this.handleSeats = this.handleSeats.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleLecturers = this.handleLecturers.bind(this)
        this.handleId = this.handleId.bind(this)
        this.handleCredits = this.handleCredits.bind(this)
        this.handleChecked = this.handleChecked.bind(this)
    }

    handleChange(event) {
        this.setState({ semester: event.target.value })
    }

    handleTimeTo(event) {
        this.setState({ timeto: event.target.value })
    }

    handleTimeFrom(event) {
        this.setState({ timefrom: event.target.value })
    }

    handleCredits(event) {
        this.setState({ credits: event.target.value })
    }

    handleSeats(event) {
        this.setState({ seats: event.target.value })
    }

    handleLecturers(event) {
        this.setState({ lecturers: event.target.value })
    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handleId(event) {
        this.setState({ id: event.target.value })
    }

    handleChecked(event){
        this.setState({ days: event.target.value })
    }

    handleSubmit() {
        let id = this.state.id
        let name = this.state.name
        let lecturers = this.state.lecturers
        let seats = this.state.seats
        let credits = this.state.credits
        let days = this.state.days
        let timeto = this.state.timeto
        let timefrom = this.state.timefrom
        let semester = this.state.semester

        if (window.confirm("Are you sure to add this course") == true) {
            if(id&&name&&lecturers&&seats&&credits&&timefrom&&timeto&&days&&semester !== ''){
            window.alert("Successfully added!")
            window.location.replace('/admin/index')
            }else{
                window.alert("Please do not left the form blank or input wrong format, please try again.")
            }
        }
    }

    handleCancel() {
        window.location.replace('/admin/index')
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
                                        <input className="input" type="number" value={this.state.id} onChange={this.handleId} placeholder="e.g 953234"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Course Name</label>
                                    <div className="control">
                                        <input className="input" type="text" value={this.state.name} onChange={this.handleName} placeholder="e.g. Computer Programming"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-7">
                                <div className="field">
                                    <label className="label">Lecturer(s)</label>
                                    <div className="control">
                                        <input className="input" type="text" value={this.state.lecturers} onChange={this.handleLecturers} placeholder="e.g. Thapakorn Tuwaemuesa,Thanawat Lukuan"></input>
                                        <p className="help is-info">*If the courese has more than 1 lecturer, use comma(,) to separate each lecturer name.*</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Seat(s)</label>
                                    <div className="control">
                                        <input className="input" type="number" value={this.state.seats} onChange={this.handleSeats} placeholder="e.g.50"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Credit(s)</label>
                                    <div className="control">
                                        <input className="input" type="number" value={this.state.credits} onChange={this.handleCredits} placeholder="e.g.3"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-half">
                                <label className="label">Day(s)</label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Monday" onChange={this.handleChecked}></input>
                                    Monday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Tuesday" onChange={this.handleChecked}></input>
                                    Tuesday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Wednesday" onChange={this.handleChecked}></input>
                                    Wednesday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Thursday" onChange={this.handleChecked}></input>
                                    Thursday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Friday" onChange={this.handleChecked}></input>
                                    Friday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Saturday" onChange={this.handleChecked}></input>
                                    Saturday &nbsp;
                            </label>
                                <label class="checkbox">
                                    <input type="checkbox" value="Sunday" onChange={this.handleChecked}></input>
                                    Sunday &nbsp;
                            </label>
                            </div>
                            <div className="column is-3">
                                <label className="label">Time</label>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <p className="is-inline">Form : </p>
                                        <input className="input is-inline" type="time" value={this.state.timefrom} onChange={this.handleTimeFrom}></input>
                                    </div>
                                    <div className="control">
                                        <p className="is-inline">To : </p>
                                        <input className="input is-inline" type="time" value={this.state.timeto} onChange={this.handleTimeTo}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Semester(s)</label>
                                    <div className="control is-expanded">
                                        <div className="select is-fullwidth">
                                            <select  defaultValue={this.state.semester} onChange={this.handleChange}>
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