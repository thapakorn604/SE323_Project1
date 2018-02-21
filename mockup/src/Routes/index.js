import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from '../Views/AdminLogin'
import Login from '../Views/Login'

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/admin" component={AdminLogin} />
  </Switch>
)