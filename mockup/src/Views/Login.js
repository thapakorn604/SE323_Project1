import React, { Component } from 'react'
import { Card, Field, Container } from "reactbulma"
import Style from './style.css'
import EmptyNav from './EmptyNav'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "Student"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleChange(event) {
        this.setState({ type: event.target.value })
    }
    handleSignIn() {
        let checker = this.state.type
        checker === 'Student' ? window.location.replace('/student/index') : window.location.replace('/lecturer/index')
    }

    render() {
        return (
            <div>
                <EmptyNav />
                <div className="section">
                <div className="column is-half is-offset-one-quarter">
                    <Card>
                        <div className="authen">
                            <h1 className="has-text-centered has-text-weight-bold is-size-5">Authentication</h1>
                        </div>
                    </Card>
                </div>
                <div className="column is-half is-offset-one-quarter">
                    <Card className="is-padding">
                        <Container fluid>
                            <Field>
                                <label class="label">Account</label>
                                <div class="control">
                                    <input className="input" type="text" placeholder="e-mail e.g. xxx@cmu.ac.th"></input>
                                </div>
                            </Field>
                            <Field>
                                <label class="label">Password</label>
                                <div class="control">
                                    <input className="input" type="password"></input>
                                </div>
                            </Field>
                            <Field>
                                <label className="label">Position</label>
                                <div className="control">
                                    <div className="select">
                                        <select defaultValue={this.state.type} onChange={this.handleChange}>
                                            <option value="Student">Student</option>
                                            <option value="Lecturer">Lecturer</option>
                                        </select>
                                    </div>
                                </div>
                            </Field>
                            <Field groupedCentered>
                                <div class="control">
                                    <button class="button is-primary" onClick={this.handleSignIn}>Sign in</button>
                                </div>
                                <div class="control">
                                    <button class="button is-text">Cancel</button>
                                </div>
                            </Field>
                        </Container>
                    </Card>
                </div>
                </div>
            </div>
        )
    }
}
export default Login


