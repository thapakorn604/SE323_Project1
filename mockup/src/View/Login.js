import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card,Field,Container} from "reactbulma";
import Style from './style.css';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            type : ""
        }
    }

    render (){
        return (
            <div>
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
                                    <select>
                                        <option>Student</option>
                                        <option>Lecturer</option>
                                    </select>
                                    </div>
                                </div>
                          </Field>
                          <Field groupedCentered>
                          <div class="control">
                            <button class="button is-primary">Sign in</button>
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
export default Login


