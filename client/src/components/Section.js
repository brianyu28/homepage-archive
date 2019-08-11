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

        <Card className="card" title="Section 8 (SQL)" extra={"November 5, 2018"}>
          <ul>
            <li><a href="https://goo.gl/forms/HtjK0tMhnwbiATcz2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 7 (Web Programming)" extra={"October 29, 2018"}>
          <ul>
            <li><a href="https://goo.gl/forms/C6qEgTACkaeiD0if1">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 6 (Python)" extra={"October 22, 2018"}>
          <ul>
            <li><a href="https://goo.gl/forms/fjDJqi5pIsbIJaWK2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 5 (HTTP)" extra={"October 15, 2018"}>
          <ul>
            <li><a href="https://goo.gl/forms/cwiGgIm6e4FpUqCK2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 4 (Data Structures)" extra={"October 8, 2018"}>
          <ul>
            <li>
              <a href="https://www.dropbox.com/s/yzkbrt2h2rvt11c/section4.pdf?dl=0">Slides</a>
            </li>
            <li>Examples
              <ul>
                <li><a href="https://www.dropbox.com/s/auzgwh5wouaty1r/list.c?dl=0">Linked Lists</a></li>
              </ul>
            </li>
            <li><a href="https://goo.gl/forms/A51KxwNmNxD2zOST2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 3 (Memory)" extra={"October 1, 2018"}>
          <ul>
            <li>
              <a href="https://www.dropbox.com/s/cgruawsi30bnx91/section3.pdf?dl=0">Slides</a>
            </li>
            <li><a href="https://goo.gl/forms/ZP0mLWXdplU71HKW2">Feedback Form</a></li>
          </ul>
        </Card>

        <Card className="card" title="Section 2 (C Continued)" extra={"September 24, 2018"}>
          <ul>
            <li>
                Examples
                <ul>
                  <li><a href="https://sandbox.cs50.io/570337d6-afaf-4b9c-b449-d1d48a6b2ad6">Capitalize</a></li>
                  <li><a href="https://sandbox.cs50.io/ef298289-e41a-4785-80da-0d949268f6de">Leap Years</a></li>
                </ul>
            </li>
            <li>
              <a href="https://www.dropbox.com/s/r8fqb8cm71920ff/section2.pdf?dl=0">Slides</a>
            </li>
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
