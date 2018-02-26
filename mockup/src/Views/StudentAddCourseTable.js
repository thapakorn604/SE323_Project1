import React, { Component } from 'react'
import { Button } from 'reactbulma'
import {Redirect} from 'react-router-dom'

class StudentAddCourseTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleAdd() {
        if (window.confirm('Are you sure to add this course ?') == true) {
            <Redirect to='/student/index' />
        }
    }
    render() {
        return (
            <div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Lecturer(s)</th>
                            <th>Credit(s)</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Seat(s)</th>
                            <th>Enrolled(s)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tr>
                        <td>953231</td>
                        <td>Object-Oriented Programming</td>
                        <td>Lect.Jayakit Hirisajja</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>9.30 - 11.00</td>
                        <td>30</td>
                        <td>30</td>
                        <td><Button primary onClick={this.handleAdd}>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953232</td>
                        <td>Object-Oriented Analysis and Design</td>
                        <td>Dr.Prompong Sugansil</td>
                        <td>3</td>
                        <td>Monday, Thursday</td>
                        <td>8.00 - 9.30</td>
                        <td>45</td>
                        <td>42</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953202</td>
                        <td>Algorithm Design and Analysis</td>
                        <td>Dr.Pattama Longani</td>
                        <td>3</td>
                        <td>Monday, Thursday</td>
                        <td>8.00 - 9.30</td>
                        <td>50</td>
                        <td>45</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953102</td>
                        <td>ADT and Problem solving</td>
                        <td>Dr.Noppon Choosri</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>9.30 - 11.00</td>
                        <td>35</td>
                        <td>35</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953323</td>
                        <td>Software CONST, TEST and MAINTAIN</td>
                        <td>Dr.Chartchai Doungsa-ard</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>12.30 - 14.00</td>
                        <td>45</td>
                        <td>45</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953213</td>
                        <td>Operating System Principle and LANG</td>
                        <td>Dr.Passakorn Pannachitta</td>
                        <td>3</td>
                        <td>TBA</td>
                        <td>TBA</td>
                        <td>35</td>
                        <td>35</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>208255</td>
                        <td>Math for SE</td>
                        <td>Lect.Morakot Intanon</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>9.30 - 11.00</td>
                        <td>50</td>
                        <td>45</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>953201</td>
                        <td>Algorithm Design and Analysis</td>
                        <td>Dr.Pattama Longani</td>
                        <td>3</td>
                        <td>Thursday</td>
                        <td>14.00 - 17.00</td>
                        <td>45</td>
                        <td>42</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>001202</td>
                        <td>English in Sceince context</td>
                        <td>Pierre Yanofsky</td>
                        <td>3</td>
                        <td>Monday, Thursday</td>
                        <td>8.00 - 9.30</td>
                        <td>40</td>
                        <td>40</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>207110</td>
                        <td>Physics:Scince that change the world</td>
                        <td>Lect.Krit Sriphomsett, Lect.Prakarn Unachak</td>
                        <td>3</td>
                        <td>Monday, Thursday</td>
                        <td>9.30 - 11.00</td>
                        <td>150</td>
                        <td>23</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>751100</td>
                        <td>Economics in Everyday life</td>
                        <td>Lect.Rossasin Tangpolponsawasdi</td>
                        <td>3</td>
                        <td>Tuesday, Friday</td>
                        <td>12.30 - 14.00</td>
                        <td>75</td>
                        <td>38</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                    <tr>
                        <td>057128</td>
                        <td>Tennis for Life and Exercise</td>
                        <td>Lect.Pakorn Tuisri</td>
                        <td>1</td>
                        <td>Wednesday</td>
                        <td>17.00 - 18.00</td>
                        <td>20</td>
                        <td>12</td>
                        <td><Button primary>ADD</Button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default StudentAddCourseTable;