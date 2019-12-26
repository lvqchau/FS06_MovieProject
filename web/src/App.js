import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";
import Ticket from './pages/Ticket';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/seat' exact component={Ticket} />
        
        <AdminLayout path="/admin">
          <Switch>
            <Route exact path="/admin/cinema" component={Admin} />
            <Route exact path="/admin/movie" component={Admin} />
          </Switch>
        </AdminLayout>

        <Layout path="/">
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Layout>

      </Switch>
    </Router>
  );
}

export default App;