import React, { Component } from 'react'
import {Button} from 'reactbulma'

class StudentEnrolledTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allcredit : '19'
         }

        this.handleWithdraw = this.handleWithdraw.bind(this)
    }

    handleWithdraw(){
        document.getElementById("c7").hidden="true"
        this.setState ({
            allcredit : '18'
        })
    }
    render() { 
        return ( 
            <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Lecturer(s)</th>
                            <th>Credit(s)</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>1</td>
                            <td>953213</td>
                            <td>Operating System Principle and LANG</td>
                            <td>TBA</td>
                            <td>TBA</td>
                            <td>Dr.Passakorn Pannachitta</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>  
                        <tr>
                            <td>2</td>
                            <td>208255</td>
                            <td>Math for SE</td>
                            <td>Tuesday, Friday</td>
                            <td>9.30 - 11.00</td>
                            <td>Lect.Morakot Intanon</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>953201</td>
                            <td>Algorithm Design and Analysis</td>
                            <td>Thursday</td>
                            <td>14.00 - 17.00</td>
                            <td>Dr.Pattama Longani</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>001202</td>
                            <td>English in Sceince context</td>
                            <td>Monday, Thursday</td>
                            <td>8.00 - 9.30</td>
                            <td>Pierre Yanofsky</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>207110</td>
                            <td>Physics:Scince that change the world</td>
                            <td>Monday, Thursday</td>
                            <td>9.30 - 11.00</td>
                            <td>Lect.Krit Sriphomsett, Lect.Prakarn Unachak</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>751100</td>
                            <td>Economics in Everyday life</td>
                            <td>Tuesday, Friday</td>
                            <td>12.30 - 14.00</td>
                            <td>Lect.Rossasin Tangpolponsawasdi</td>
                            <td>3</td>
                            <Button danger>Withdraw</Button>
                        </tr>
                        <tr id="c7">
                            <td>7</td>
                            <td>057128</td>
                            <td>Tennis for Life and Exercise</td>
                            <td>Wednesday</td>
                            <td>17.00 - 18.00</td>
                            <td>Lect.Pakorn Tuisri</td>
                            <td>1</td>
                            <Button danger onClick={this.handleWithdraw}>Withdraw</Button>
                        </tr> 
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>All credits</th>
                            <th>{this.state.allcredit}</th>
                        </tr>                         
                </table>
         )
    }
}
 
export default StudentEnrolledTable;