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

        <Card className="card" title="Section 2 (C Continued)" extra={"September 24, 2018"}>
          <ul>
            <li>
                Examples (coming soon)
            </li>
            <li>Slides (coming soon)</li>
            <li><a href="https://goo.gl/forms/OpH19rf7WlzoIuTK2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 1 (C)" extra={"September 17, 2018"}>
          <ul>
            <li>
                Examples
                <ul>
                  <li><a href="https://sandbox.cs50.io/deb9b967-d71d-4302-8d05-21884d1431f3">Conditions</a></li>
                  <li><a href="https://sandbox.cs50.io/b2fb9fd1-7e15-421c-ae17-5d728616c542">Booleans</a></li>
                  <li><a href="https://sandbox.cs50.io/48d83c6c-332f-47a9-ae83-d1316c5ac9ff">Swap</a></li>
                  <li><a href="https://sandbox.cs50.io/d58cc5a3-16ae-4ff9-ba51-87ac07531c53">Functions</a></li>
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
