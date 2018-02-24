import React, { Component } from 'react'
import Style from '../Views/style.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <footer className="footer" id="is-green">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>WBBs Registration System</strong>
                    <br /> &copy; 2018 by
                    <strong>SE323 Students</strong>
                </p>
            </div>
        </div>
    </footer>
                </div>
         )
    }
}
 
export default Footer;