import React, { Component } from 'react'
import {Button} from 'reactbulma'

class StudentAddCourseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleAdd(){
        if(window.confirm('Are you sure to add this course ?')==true)
		{
            window.location.replace('/student/index')
		}
    }
    render() { 
        return ( 
            <div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Lecturer(s)</th>
                            <th>Credit(s)</th>
                            <th>Seat(s)</th>
                            <th>Enrolled(s)</th>
                            <th>Add Course</th>
                        </tr>
                    </thead>
                    <tr>
                        <th>1</th>
                        <td>953231</td>
                        <td>Object-Oriented Programming</td>
                        <td>Lect.Jayakit Hirisajja</td>
                        <td>3</td>
                        <td>30</td>
                        <td>30</td>
                        <td><Button primary onClick={this.handleAdd}>ADD</Button></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>953232</td>
                        <td>Object-Oriented Analysis and Design</td>
                        <td>Dr.Prompong Sugansil</td>
                        <td>3</td>
                        <td>45</td>
                        <td>42</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>953202</td>
                        <td>Algorithm Design and Analysis</td>
                        <td>Dr.Pattama Longani</td>
                        <td>3</td>
                        <td>50</td>
                        <td>45</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>953102</td>
                        <td>ADT and Problem solving</td>
                        <td>Dr.Noppon Choosri</td>
                        <td>3</td>
                        <td>35</td>
                        <td>35</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>953323</td>
                        <td>Software CONST, TEST and MAINTAIN</td>
                        <td>Dr.Chartchai Doungsa-ard</td>
                        <td>3</td>
                        <td>45</td>
                        <td>45</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                </table>
            </div>    
         )
    }
}
 
export default StudentAddCourseTable;