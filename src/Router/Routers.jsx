import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom/cjs/react-router-dom.min";
import Main from "../components/pages/Main/Main";
import Aside from "../components/pages/Dashboard/Aside";
import Header from "../components/pages/Dashboard/Header";
import Footer from "../components/pages/Dashboard/Footer";
import Content from "../components/pages/Dashboard/Content";
import Login from "../components/pages/Login/Login";

const Routers = () => {
 /* / */
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/admin">
          <Aside />
          <Header />
          <Footer />
        </Route>
     {/*    {sessionStorage.getItem("token") ? (
          <Route path="/contenido">
            <Aside />
            <Header />
            <Content />
            <Footer />
          </Route>
        ) : (
          <Route path="/login">
            <Login />
          </Route>
        )} */}

        <Route path="/contenido">
            <Aside />
            <Header />
            <Content />
            <Footer />
          </Route>
        
          <Route path="/login">
            <Login />
          </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
