import React, { Component } from 'react';
class summary extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Total Students</p>
                        <p className="title">4</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Summary Grade</p>
                        <p className="title">3.99</p>
                    </div>
                </div>
            </nav>
        </div>)
    }
}

export default summary;