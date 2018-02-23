import React, { Component } from 'react'

class StudentGradeResult extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Credit(s)</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>1</td>
                            <td>953213</td>
                            <td>Operating System Principle and LANG</td>
                            <td>3</td>
                            <td>TBA</td>
                        </tr>  
                        <tr>
                            <td>2</td>
                            <td>208255</td>
                            <td>Math for SE</td>
                            <td>3</td>
                            <td>C+</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>953201</td>
                            <td>Algorithm Design and Analysis</td>
                            <td>3</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>001202</td>
                            <td>English in Sceince context</td>
                            <td>3</td>
                            <td>B</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>207110</td>
                            <td>Physics:Scince that change the world</td>
                            <td>3</td>
                            <td>B+</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>751100</td>
                            <td>Economics in Everyday life</td>
                            <td>3</td>
                            <td>A</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>057128</td>
                            <td>Tennis for Life and Exercise</td>
                            <td>3</td>
                            <td>A</td>

                        </tr>           
                </table>
         )
    }
}
 
export default StudentGradeResult;