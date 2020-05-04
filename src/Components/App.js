import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, About } from '../Route/index'

function App() {
  return (
    <>
    <Router basename="/hashtest">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about"  component={About}/>
        <Redirect path="*" to="/"/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
