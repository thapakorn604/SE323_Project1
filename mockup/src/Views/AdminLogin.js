import React, { Component } from 'react'
import { Card, Field, Container } from "reactbulma"
import Style from './style.css'
import EmptyNav from './EmptyNav'

class AdminLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            identity: '',
            password: ''
        }
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleIdentity = this.handleIdentity.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleIdentity(event) {
        this.setState({ identity: event.target.value })
    }
    handlePassword(event) {
        this.setState({ password: event.target.value })
    }
    handleSignIn() {
        let identity = this.state.identity
        let password = this.state.password

        if(identity==='admin'&&password==='admin'){
            window.location.replace("/admin/index")
        }else{
            window.alert('You put wrong account, password or left it blank, please try again')
        }
    }

    render() {
        return (
            <div>
                <EmptyNav />
                <div className="section">
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
                                    <label className="label">Identity</label>
                                    <div className="control">
                                        <input className="input" value={this.state.identity} onChange={this.handleIdentity} type="text" placeholder="Admin ID e.g.582115015"></input>
                                    </div>
                                </Field>
                                <Field>
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input" value={this.state.password} onChange={this.handlePassword} type="password"></input>
                                    </div>
                                </Field>
                                <Field groupedCentered>
                                    <div className="control">
                                        <button className="button is-primary" onClick={this.handleSignIn}>Sign in</button>
                                    </div>
                                    <div class="control">
                                        <button className="button is-text">Cancel</button>
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
export default AdminLogin


