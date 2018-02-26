import React, { Component } from 'react'
import bulma from '../node_modules/bulma/css/bulma.css'
import Route from './Routes'
import Footer from './Views/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Route />
        <Footer />
      </div>
    )
  }
}

export default App;
