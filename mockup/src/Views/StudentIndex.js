import React, { Component } from 'react'
import StudentNav from './StudentNav'

class StudentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <StudentNav />
            </div>    
         )
    }
}
 
export default StudentIndex;
