import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactbulma'

class AdminNav extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        window.location.replace("/admin")
    }
    render() {
        return (
            <div>
                <nav className="navbar is-success" role="navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <NavLink exact to="/admin/index" className="navbar-item">
                                <h1 className="has-text-weight-bold is-size-4">Registration System</h1>
                            </NavLink>
                            <div className="navbar-burger" id="collaspe" data-target="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="navbar-menu" id="menu">
                            <div className="navbar-start">
                                <NavLink to="/admin/addcourse" activeClassName="is-active" className="navbar-item">Add Course</NavLink>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <Button className="is-danger" onClick={this.handleLogout}> Log out </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default AdminNav;

