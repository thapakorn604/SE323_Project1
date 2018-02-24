import React, { Component } from 'react'
import StudentNav from '../Views/StudentNav'
import {Box} from 'reactbulma'

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
            <h1 className="has-text-centered is-size-4 has-text-weight-bold">Tuition fee Conclusion</h1>
                <div className="columns">
                    <div className="column">
                    </div>
                </div>
                </Box>
            </section>         
            </div>    
           )
    }
}
 
export default StudentPayment ;