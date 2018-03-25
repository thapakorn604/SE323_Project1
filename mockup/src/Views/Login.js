import React, { Component } from 'react'
import { Card, Field, Container } from "reactbulma"
import Style from './style.css'
import EmptyNav from './EmptyNav'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: "Student",
            account: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
        this.handleAccount = this.handleAccount.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleChange(event) {
        this.setState({ type: event.target.value })
    }
    handleAccount(event) {
        this.setState({account:event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }
    handleSignIn(event) {
        let type = this.state.type
        let account = this.state.account
        let password = this.state.password
        //checker === 'Student' ? window.location.replace('/student/index') : window.location.replace('/lecturer/index')
        if(type ==='Student'&& account==='student'&&password==='student'){
            window.location.replace('/student/index')
        }else if(type==='Lecturer'&&account==='lecturer'&&password==='lecturer'){
            window.location.replace('/lecturer/index')
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
                                <h1 className="has-text-centered has-text-weight-bold is-size-5">Authentication</h1>
                            </div>
                        </Card>
                    </div>
                    <div className="column is-half is-offset-one-quarter">
                        <Card className="is-padding">
                            <Container fluid>
                                <Field>
                                    <label className="label">Account</label>
                                    <div className="control">
                                        <input className="input" type="text" value={this.state.account} onChange={this.handleAccount} placeholder="username e.g.studentacc"></input>
                                    </div>
                                </Field>
                                <Field>
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input" value={this.state.password} onChange={this.handlePassword} type="password"></input>
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
                                    <div className="control">
                                        <button className="button is-primary" onClick={this.handleSignIn}>Sign in</button>
                                    </div>
                                    <div className="control">
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
export default Login


