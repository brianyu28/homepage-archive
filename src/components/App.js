import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Dropdown, Icon, Menu } from "antd";

import Courses from "./Courses";
import Home from "./Home";
import Posts from "./Posts";
import Projects from "./Projects";
import Section from "./Section";
import Analytics, { logResource } from "../Analytics";

import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
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
          <a onClick={() => logResource("resume")} href={resume}><Icon type="file-text" /> Resume</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("github")} href="https://github.com/brianyu28"><Icon type="github" /> GitHub</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("linkedin")} href="https://www.linkedin.com/in/brian-yu/"><Icon type="linkedin" /> LinkedIn</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("facebook")} href="https://www.facebook.com/BrianYu28"><Icon type="facebook" /> Facebook</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("crimson")} href="https://www.thecrimson.com/writer/1212675/Brian_P._Yu/"><Icon type="book" /> The Crimson</a>
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
        <Route path="/" component={Analytics} />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/section" component={Section} />
        <Route exact path="/shoot" component={Shoot} />
      </div>
    );
  }

}

class Resume extends React.Component {
  render() {
    window.location = resume;
    return null;
  }
}

class Shoot extends React.Component {
  render() {
    window.location = "https://bpyshoot.herokuapp.com/";
    return null;
  }
}

export default App;
