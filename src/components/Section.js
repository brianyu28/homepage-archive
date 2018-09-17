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
            <li>
                Examples
                <ul>
                  
                </ul>
            </li>
            <li><a href="https://www.dropbox.com/s/2fcfn75lkkg49b1/section1.pdf?dl=0">Slides</a></li>
            <li><a href="https://goo.gl/forms/HNntgaOnNjg1mRlp2">Feedback Form</a></li>
          </ul>
        </Card>

      </div>
    );
  }

}
