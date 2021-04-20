import { useState } from 'react';
import Dogs from "./Dogs";
import Dog from "./Dog";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

function Register(){
  return(
    <Router>
      <Switch>
        <Route path="/dog" component={Dog} />
        <Route path="/register" component={Dogs} />
      </Switch>
    </Router>
  );
}

export default Register;
