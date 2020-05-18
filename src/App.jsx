// React imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter,
  useLocation,
} from 'react-router-dom';

// Ant Design imports
import { Layout, Menu, Breadcrumb, Button } from 'antd';

// Components and Partials imports
import Navbar from './partials/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyFooter from './partials/MyFooter/MyFooter';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';
import { browserHistory } from 'react-router';

// Stylesheet import
import './App.less';

// ----------
class App extends Component {
  // ----------
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  // ----------
  mockLogin = (type) => {
    this.setState({
      isLoggedIn: type === 'in' ? true : false,
    });
  };

  // ----------
  render() {
    const { isLoggedIn } = this.state;

    return (
      <AuthContext.Provider value={false}>
        <Router>
          <div className="App">
            <Layout className="layout">
              <Navbar isLoggedIn={isLoggedIn}></Navbar>
              <Route exact path="/" component={Landing} />
              <Route
                path="/login"
                component={() => <Login mockLogin={this.mockLogin} />}
              />
              <PrivateRoute path="/app" component={Home} />
              <MyFooter></MyFooter>
            </Layout>
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
