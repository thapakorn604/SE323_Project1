import React, { Component } from 'react'
import StudentNav from '../Views/StudentNav'
import StudentPayTable from '../Views/StudentPayTable'
import {Box,Field} from 'reactbulma'
import Style from '../Views/style.css'
import Button from 'reactbulma/lib/components/Button/Button';

class StudentPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <StudentNav />
            <section className="section">
            <Box>
            <h1 className="has-text-centered is-size-4 has-text-weight-bold">Tuition fee Summary</h1>
                <hr/>
                <div className="content has-text-centered">
                <p className="is-inline has-text-weight-bold is-size-5">Name: </p> 
                <p className="is-inline is-size-6"> Thapakorn Tuwaemuesa</p> 
                <span>&nbsp;&nbsp;&nbsp;</span>
                <p className="is-inline has-text-weight-bold is-size-5">Student ID: </p> 
                <p className="is-inline is-size-6"> 582115015</p>
                <br />
                <p className="is-inline has-text-weight-bold is-size-5">Faculty: </p> 
                <p className="is-inline is-size-6"> Colleage of Art, Media and Technology</p> 
                <span>&nbsp;&nbsp;&nbsp;</span>
                <p className="is-inline has-text-weight-bold is-size-5">Major: </p> 
                <p className="is-inline is-size-6"> Software Engineering</p>
                </div>
                <hr />
                <h1 className="has-text-centered is-size-4 has-text-weight-bold">Enrolled Course(s)</h1>
                <StudentPayTable />
                </Box>
                <Field groupedCentered>
                                <div class="control">
                                    <button class="button is-info">Print Bill Payment</button>
                                </div>
                                <div class="control">
                                    <button class="button">Pay with Credit/Debit card</button>
                                </div>
                            </Field>
            </section>         
            </div>    
           )
    }
}
 
export default StudentPayment ;