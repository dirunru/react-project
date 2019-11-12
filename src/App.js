import React, { Component } from 'react';
import {BrowserRouter,Route} from "react-router-dom"; // BrowserRouter HashRouter
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"


class App extends Component {
  render() {
    return (
        <BrowserRouter>
              {/* 在首页组件所在路线标签中加入精确：exact */}
              <Route exact path='/' component={Admin}></Route> 
              <Route path='/login' component={Login}></Route>
        </BrowserRouter>
    );
  }
}

export default App;