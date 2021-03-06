import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomersList from "./CustomersList";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./404Page";



export default class App extends Component {
  render() {
    return <BrowserRouter>
            <NavBar />
            <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/customers" exact component={CustomersList}/>
            <Route path="/cart" exact component={ShoppingCart}/>
            <Route path="*" component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
      
    
  }
}
