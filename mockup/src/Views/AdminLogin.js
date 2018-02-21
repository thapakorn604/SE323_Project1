import React, { Component } from 'react'
import { Card, Field, Container } from "reactbulma"
import Style from './style.css'
import EmptyNav from './EmptyNav'

class AdminLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "Admin"
        }
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleChange(event) {
        this.setState({ type: event.target.value })
    }
    handleSignIn() {
        window.location.replace("/admin/index")
    }

    render() {
        return (
            <div>
                <EmptyNav />
                <div className="column is-half is-offset-one-quarter">
                    <Card>
                        <div className="authen">
                            <h1 className="has-text-centered has-text-weight-bold is-size-5">Administrator</h1>
                        </div>
                    </Card>
                </div>
                <div className="column is-half is-offset-one-quarter">
                    <Card className="is-padding">
                        <Container fluid>
                            <Field>
                                <label class="label">Identity</label>
                                <div class="control">
                                    <input className="input" type="text" placeholder="Admin ID e.g.582115015"></input>
                                </div>
                            </Field>
                            <Field>
                                <label class="label">Password</label>
                                <div class="control">
                                    <input className="input" type="password"></input>
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
        )
    }
}
export default AdminLogin


