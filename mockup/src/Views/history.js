import React, { Component } from 'react'
import LecturerNav from './LecturerNav'
import LecturerHistoryTable from './LecturerHistoryTable'
import { Box } from 'reactbulma'

class history extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
            <LecturerNav/>
            <div className="container">
                <div className="column">
                <Box>
                    <h1 className="has-text-centered is-size-4">Course History</h1>
                    <div className="dropdown is-pulled-right is-right is-hoverable">
                        <div classNameName="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu1">
                        <span>Sort</span>
                        </button>
                        </div>
                            <div className="dropdown-menu" id="dropdown-menu1" role="menu">
                                <div className="dropdown-content">
                                    <a href="#" className="dropdown-item">Newest</a>
                                    <a href="#" className="dropdown-item">Oldest</a>
                                </div>
                            </div>
                    </div>
                    <LecturerHistoryTable />     
                </Box>
                
                </div>
            </div>
            </div>
         )
    }
}
 
export default history;