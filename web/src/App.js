import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <Router>
      <Switch>
        <AdminLayout path="/admin">
          <Switch>
            <Route exact path="/admin/cinema" component={Admin} />
          </Switch>
        </AdminLayout>
        {/* <Layout path="/"> */}
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        {/* </Layout> */}
      </Switch>
    </Router>
  );
}

export default App;