import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from '../Views/AdminLogin'
import Login from '../Views/Login'
import AdminIndex from '../Views/AdminIndex'
import NotFound from '../Views/NotFound'


export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/admin" component={AdminLogin} />
    <Route exact path="/admin/index" component={AdminIndex} />
    <Route component={NotFound} />
  </Switch>
)