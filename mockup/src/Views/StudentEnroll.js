import React, { Component } from 'react'
import StudentNav from '../Views/StudentNav'
import StudentAddCourseTable from '../Views/StudentAddCourseTable'
import StudentSearchIDTable from '../Views/StudentSearchIDTable'
import StudentSearchNameTable from '../Views/StudentSearchNameTable'
import StudentSearchNotFound from '../Views/StudentSearchNotfound'
import { Box, Field, Button } from 'reactbulma'


class StudentEnroll extends Component {
    constructor(props) {
        super(props);
        this.state = {type:'id',
                        keyword:'',
                        search:'init'}

        this.handleChange = this.handleChange.bind(this)
        this.handleKeyword = this.handleKeyword.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(event) {
        this.setState({ type: event.target.value })
    }

    handleKeyword(event) {
        this.setState({ keyword: event.target.value })
    }

    handleSearch(){
        let keyword = this.state.keyword
        if (keyword === '953234'){
            this.setState({search: 'byid'});
        }else if (keyword === 'tennis'){
            this.setState({search: 'byname'});
        }else{
            this.setState({search: 'notfound'});
        }
    }

    render() {
        const search = this.state.search
        const type = this.state.type
        let table = null
            if(search == 'init'){
                table = <StudentAddCourseTable />
            }else if (search == 'byid' && type =='id' ){
                table = <StudentSearchIDTable />
            }else if (search == 'byname' && type == 'name'){
                table = <StudentSearchNameTable />
            }else{
                table = <StudentSearchNotFound />
            }
        return (
            <div>
                <StudentNav />
                <div className="section">
                    <div className="container">
                        <Box>
                            <Field grouped>
                                <p className="control">
                                    <span className="select">
                                        <select defaultValue={this.state.type} onChange={this.handleChange}>
                                            <option value="id">Course ID</option>
                                            <option value="name">Course Name</option>
                                        </select>
                                    </span>
                                </p>
                                <div className="control is-expanded">
                                    <input className="input" value={this.state.keyword} onChange={this.handleKeyword}type="text" placeholder="Course ID or Course Name"></input>
                                </div>
                                <div className="control">
                                     <button className="button is-info" onClick={this.handleSearch}>Search</button>
                                </div>
                            </Field>
                        </Box>

                        <Box>
                            {table}
                        </Box>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentEnroll;