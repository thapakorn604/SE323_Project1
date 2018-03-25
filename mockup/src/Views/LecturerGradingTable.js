import React, { Component } from 'react';
import { Field } from "reactbulma";
import Style from './style.css';

class LecturerGradingTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grade1:'',
            grade2:'',
            grade3:'',
            grade4:'',
            grade5:''
        };

        this.handleGrade1 = this.handleGrade1.bind(this)
        this.handleGrade2 = this.handleGrade2.bind(this)
        this.handleGrade3 = this.handleGrade3.bind(this)
        this.handleGrade4 = this.handleGrade4.bind(this)
        this.handleGrade5 = this.handleGrade5.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleClearall = this.handleClearall.bind(this)
    }
    handleGrade1(event) {
        this.setState({ grade1: event.target.value })
    }
    handleGrade2(event) {
        this.setState({ grade2: event.target.value })
    }
    handleGrade3(event) {
        this.setState({ grade3: event.target.value })
    }
    handleGrade4(event) {
        this.setState({ grade4: event.target.value })
    }
    handleGrade5(event) {
        this.setState({ grade5: event.target.value })
    }
    handleSave(){
        let {grade1,grade2,grade3,grade4,grade5} = this.state
        if(grade1||grade2||grade3||grade4||grade5 !==''){
            window.alert('Successfully update!')   
        }else{
            window.alert('Please put the grade as correct format or do not left it blank.')
        }
    }
    handleClearall(){
        this.setState({ grade1:'',
                        grade2:'',
                        grade3:'',
                        grade4:'',
                        grade5:''})
    }

    render() {
        return <div>
            <h1 className="has-text-centered is-size-4">953102 2/60<br /> ADT and Problem solving</h1>
            <hr />
            <table className="table is-fullwidth center-table">
                <tr>
                    <th>No.</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Grade</th>
                    <th></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>582115001</td>
                    <td>Thanawat Lukuan</td>
                    <td><input className="input" type="text" value={this.state.grade1} onChange={this.handleGrade1}></input></td>
                    <td><button className="button is-link" onClick={this.handleSave}>Save</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>582115015</td>
                    <td>Thapakorn K. Oat</td>
                    <td><input className="input" type="text" value={this.state.grade2} onChange={this.handleGrade2}></input></td>
                    <td><button className="button is-link" onClick={this.handleSave}>Save</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>582115045</td>
                    <td>Hathaichanok Dumrongsiri</td>
                    <td><input className="input" type="text"  value={this.state.grade3} onChange={this.handleGrade3}></input></td>
                    <td><button className="button is-link" onClick={this.handleSave}>Save</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>582115505</td>
                    <td>De Wang</td>
                    <td><input className="input" type="text" value={this.state.grade4} onChange={this.handleGrade4}></input></td>
                    <td><button className="button is-link" onClick={this.handleSave}>Save</button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>582115003</td>
                    <td>De Wang</td>
                    <td><input className="input" type="text" value={this.state.grade5} onChange={this.handleGrade5}></input></td>
                    <td><button className="button is-link" onClick={this.handleSave}>Save</button></td>
                </tr>
            </table>
            <Field groupedCentered>
                <div class="control">
                    <button class="button is-success" onClick={this.handleSave}>Save All</button>
                </div>
                <div class="control">
                    <button class="button is-info"  onClick={this.handleClearall}>Clear All</button>
                </div>
            </Field>
        </div>
    }
}

export default LecturerGradingTable;
