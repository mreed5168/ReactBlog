import React from 'react'
import {Route, Router} from 'react-router';
import Main from '../containers/Main.jsx';
// import SampleComponenet from '../containers/Sample.jsx';



const routes = (
  <Router>
    <Route path="/" component={Main}> </Route>
    {/* <Route path="/searches" component={WeatherHistory}> </Route> */}
  </Router>
);

export default routes;
