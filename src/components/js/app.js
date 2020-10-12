import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../pages/home-page";
import Header from "./header";
import Footer from "./footer";
import LoginPage from "../../pages/login-page";
import ProfilePageDemo from "../../pages/profile-page-demo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/username/profile">
          <ProfilePageDemo />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
