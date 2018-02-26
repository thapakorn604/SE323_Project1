import React, { Component } from 'react'
import AdminNav from './AdminNav'
import user from '../Images/user.png'
import Style from './style.css'
import { Box } from 'reactbulma'
import AdminIndexTable from './AdminIndexTable'

class AdminIndex extends Component {
  render() {
    return (
      <div>
        <AdminNav />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">  
                <Box>
                  <div className="card-content is-flex is-horizontal-center">
                    <figure className="image is-128x128">
                      <img src={user} />
                    </figure>
                  </div>
                  <div className="has-text-centered">
                    <p><strong>Staff ID : </strong> LIV11 </p>
                    <p><strong>Name : </strong> Mohamed Salah </p>
                    <p><strong>Department : </strong> Registration Office </p>
                  </div>
                </Box>
              </div>
              <div className="column">
                <Box>
                  <h1 className="has-text-centered is-size-4"> Semester 2/60 Courses </h1>
                  <hr />
                  <AdminIndexTable />
                </Box>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AdminIndex;