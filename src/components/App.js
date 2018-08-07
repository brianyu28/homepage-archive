import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Dropdown, Icon, Menu } from "antd";

import Home from "./Home";
import Projects from "./Projects";
import Courses from "./Courses";
import Posts from "./Posts";

import profile from "../assets/profile.png";
import "../css/App.css";

const ButtonGroup = Button.Group;

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          {this.renderProfileImage()}
          {this.renderNavigation()}
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }

  renderProfileImage() {
    return (
      <div className="profile">
        <img src={profile} alt="profile" className="profile-image" />
        <div className="profile-name">Brian Yu</div>
      </div>
    )
  }

  renderNavigation() {

    const links = (
      <Menu>
        <Menu.Item>
          <a href="/resume.pdf"><Icon type="file-text" /> Resume</a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://github.com/brianyu28"><Icon type="github" /> GitHub</a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.linkedin.com/in/brian-yu/"><Icon type="linkedin" /> LinkedIn</a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.facebook.com/BrianYu28"><Icon type="facebook" /> Facebook</a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.thecrimson.com/writer/1212675/Brian_P._Yu/"><Icon type="book" /> The Crimson</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="navigation">
        <ButtonGroup>
          <Button><Link to="/">Home</Link></Button>
          <Button><Link to="/projects">Projects</Link></Button>
          <Button><Link to="/courses">Courses</Link></Button>
          <Button><Link to="/posts">Posts</Link></Button>
          <Dropdown overlay={links}>
            <Button>Links<Icon type="down" /></Button>
          </Dropdown>
        </ButtonGroup>
      </div>
    );
  }

  renderRoutes() {
    return (
      <div className="body">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/posts" component={Posts} />
      </div>
    );
  }

}

export default App;
