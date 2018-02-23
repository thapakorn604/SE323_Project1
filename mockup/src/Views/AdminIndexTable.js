import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AdminIndexTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div> 
            <table className="table">
                <thead>
                <tr>    
                    <th>No.</th>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Lecturer(s)</th>
                    <th>Credit(s)</th>
                    <th>Seat(s)</th>
                    <th>Enrolled(s)</th>
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
                </tr>
                <tr>    
                    <th>2</th>
                    <td>953232</td>
                    <td>Object-Oriented Analysis and Design</td>
                    <td>Dr.Prompong Sugansil</td>
                    <td>3</td>
                    <td>45</td>
                    <td>42</td>
                </tr>
                <tr>    
                    <th>3</th>
                    <td>953202</td>
                    <td>Algorithm Design and Analysis</td>
                    <td>Dr.Pattama Longani</td>
                    <td>3</td>
                    <td>50</td>
                    <td>45</td>
                </tr> 
                <tr>    
                    <th>4</th>
                    <td>953102</td>
                    <td>ADT and Problem solving</td>
                    <td>Dr.Noppon Choosri</td>
                    <td>3</td>
                    <td>35</td>
                    <td>35</td>
                </tr>
                <tr>    
                    <th>5</th>
                    <td>953323</td>
                    <td>Software CONST, TEST and MAINTAIN</td>
                    <td>Dr.Chartchai Doungsa-ard</td>
                    <td>3</td>
                    <td>45</td>
                    <td>45</td>
                </tr>                 
            </table>
            <div className="has-text-right">
            <Link to="#">more...</Link>
            </div>
            </div>
         )
    }
}
 
export default AdminIndexTable;