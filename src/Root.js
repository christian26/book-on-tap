import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App'

const Root = () => (
  <Router >
    <Switch>      
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

export default Root
