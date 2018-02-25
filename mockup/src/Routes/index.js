import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from '../Views/AdminLogin'
import Login from '../Views/Login'
import AdminIndex from '../Views/AdminIndex'
import StudentIndex from '../Views/StudentIndex'
import NotFound from '../Views/NotFound'
import LecturerIndex from '../Views/LecturerIndex';
import grading from '../Views/grading';
import history from '../Views/history';


export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/admin" component={AdminLogin} />
    <Route exact path="/admin/index" component={AdminIndex} />
    <Route exact path="/student/index" component={StudentIndex} />
    <Route exact path="/lecturer/index" component={LecturerIndex} />
    <Route exact path="/lecturer/grading" component={grading}/>
    <Route exact path="/lecturer/history" component={history}/>
    <Route component={NotFound} />
  </Switch>
)