import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminLogin from '../Views/AdminLogin'
import Login from '../Views/Login'
import AdminIndex from '../Views/AdminIndex'
import StudentIndex from '../Views/StudentIndex'
import NotFound from '../Views/NotFound'
import LecturerIndex from '../Views/LecturerIndex';
import LecturerGrading from '../Views/LecturerGrading';
import LecturerHistory from '../Views/LecturerHistory';
import StudentTranscript from '../Views/StudentTranscript';
import StudentPayment from '../Views/StudentPayment';
import StudentEnroll from '../Views/StudentEnroll';
import AdminAddCourse from '../Views/AdminAddCourse';



export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/admin" component={AdminLogin} />
    <Route exact path="/admin/index" component={AdminIndex} />
    <Route exact path="/admin/addcourse" component={AdminAddCourse} />
    <Route exact path="/student/index" component={StudentIndex} />
    <Route exact path="/student/transcript" component={StudentTranscript} />
    <Route exact path="/student/payment" component={StudentPayment} />
    <Route exact path="/student/enroll" component={StudentEnroll} />
    <Route exact path="/lecturer/index" component={LecturerIndex} />
    <Route exact path="/lecturer/grading" component={LecturerGrading}/>
    <Route exact path="/lecturer/history" component={LecturerHistory}/>
    <Route component={NotFound} />
  </Switch>
)