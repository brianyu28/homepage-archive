import React from "react";
import { Card } from "antd";

export default class Projects extends React.Component {

  render() {
    return (
      <div className="projects">
        {this.renderSections()}
      </div>
    );
  }

  renderSections() {

    return (
      <div>
        <Card className="card" title="Section 1 (C)" extra={"September 17, 2018"}>
          <ul>
            <li><a href="https://goo.gl/forms/HNntgaOnNjg1mRlp2">Feedback Form</a></li>
          </ul>
        </Card>

      </div>
    );
  }

}