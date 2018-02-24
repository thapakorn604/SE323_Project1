import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from '../Views/AdminLogin'
import Login from '../Views/Login'
import AdminIndex from '../Views/AdminIndex'
import StudentIndex from '../Views/StudentIndex'
import NotFound from '../Views/NotFound'
import LecturerIndex from '../Views/LecturerIndex';
import StudentTranscript from '../Views/StudentTranscript';
import StudentPayment from '../Views/StudentPayment';


export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/admin" component={AdminLogin} />
    <Route exact path="/admin/index" component={AdminIndex} />
    <Route exact path="/student/index" component={StudentIndex} />
    <Route exact path="/student/transcript" component={StudentTranscript} />
    <Route exact path="/student/payment" component={StudentPayment} />
    <Route exact path="/lecturer/index" component={LecturerIndex} />
    <Route component={NotFound} />
  </Switch>
)