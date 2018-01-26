import React, { Component } from "react";
//import { withRouter, Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import logo from "./logo.svg";

import MainFocus from "./MainFocus";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="priorities"
            active={activeItem === "priorities"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="appointments"
            active={activeItem === "appointments"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <div className="App-OwlDivMainFocus">
          <div className="App-OwlDiv">
            <Image
              className="App-OwlImg"
              src={require("./owl.ico")}
              size="small"
            />
          </div>
          <MainFocus />
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div className="container">
    <button
      className="navbar-toggler"
      type="button "
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/home">
      OWL
    </Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>; */
}
