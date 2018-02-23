import React, { Component } from 'react'
import LecturerNav from '../Views/LecturerNav'
import LecturerIndexTable from './LecturerIndexTable'
import user from '../Images/user.png'

class LecturerIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
<div>
  <LecturerNav />
    <section className="section">
    <div className = "container">
      <div className="columns">
          <div className="column is-one-fifth">
            <div className="card-content is-flex is-horizontal-center">
                <figure className="image is-128x128">
                    <img src={user} />
                </figure>
            </div>            
            <div className="has-text-centered">
                <p><strong>Dr. Thapayang Wangwang</strong></p>
                <p><strong>Faculty : </strong>College of Art, Media and Technology</p>
                <p><strong>Major : </strong>Software Engineering</p>
                <hr/>
            </div>
              <nav className="panel">
                <p className="panel-heading">Repositories</p>
                  <div className="panel-block">
                <p className="control has-icons-left">
                      <input className="input is-small" type="text" placeholder="search"></input>
                </p>
          </div>
              <p className="panel-tabs">
                <a className="is-active">Course</a>
                <a>History</a>
              </p>

            <a className="panel-block is-active">
              <span className="panel-icon">
                </span>953323
            </a>

            <a className="panel-block">
              <span className="panel-icon">
              </span>953233
            </a>

            <a className="panel-block">
              <span className="panel-icon">
              </span>953333
            </a>

            <div className="panel-block">
              <button className="button is-link is-outlined is-fullwidth">see all</button>
            </div>
            </nav>
        </div>
        <div className="column">
        <p className="title">Student Registration</p>
        <LecturerIndexTable/>
        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default LecturerIndex;
