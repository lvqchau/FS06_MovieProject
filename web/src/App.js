import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AuthScreen from './pages/Auth';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/account' exact component={AuthScreen} />
        <Route path='/admin' exact component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
