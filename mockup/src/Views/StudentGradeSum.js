import React, { Component } from 'react'

class StudentGradeSum extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Enrolled Credits</p>
                        <p className="title">{this.props.enrolled}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Recieved Credits</p>
                        <p class="title">{this.props.recv}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">GPA</p>
                        <p class="title">{this.props.gpa}</p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default StudentGradeSum;