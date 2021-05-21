import React, { Component } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";
import Navbar from "./components/Navbar";
import User from "./components/User";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    console.log("Component Mounted")
    this.getData();
  }

  componentDidUpdate(){
    console.log("Component Updated")
  }

  getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.log(err.message));
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home users={this.state.users} />}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/:username" component={() => <User users={this.state.users}/>} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}
