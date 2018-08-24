import React from "react";

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        {this.renderHello()}
        {this.renderContact()}
      </div>
    );
  }

  renderHello() {

    const winthrop = "https://winthrop.harvard.edu/";
    const cs50 = "https://cs50.harvard.edu/";
    const cs100 = "https://cs.harvard.edu/100";
    const web = "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript";
    const crimson = "https://www.thecrimson.com/";
    const palantir = "https://www.palantir.com/";

    return (
      <div>
        <h2>Hello!</h2>
        <p>
          I'm Brian, a senior at Harvard College living in <a href={winthrop}>Winthrop House</a>,
          studying computer science and linguistics.

          I'm the head teaching fellow for <a href={cs50}>CS50</a>,
          Harvard's introductory course in computer science, and <a href={cs100}>CS100</a>,
          Harvard's course on software engineering in the digital humanities.

          I'm also the instructor for <a href={web}>Web Programming with Python and JavaScript</a> on
          edX and at Harvard Extension School, and I'm a news executive and former digital strategist
          at <a href={crimson}>The Crimson</a>, Harvard College's student newspaper.
          
          I've previously worked as a software engineering intern at <a href={palantir}>Palantir</a>,
          and I've also worked for 3P Speech
          and the National Speech and Debate Association. I'm interested in computation, language, and education.
        </p>
      </div>
    );
  }

  renderContact() {
    return (
      <div>
        <h3>Contact Me</h3>
        <ul>
          <li>
            For general communication,
            contact <a href="mailto:brian@brianyu.me">brian@brianyu.me</a>, <a href="mailto:brian@cs.harvard.edu">brian@cs.harvard.edu</a>,
            or <a href="mailto:brianyu@college.harvard.edu">brianyu@college.harvard.edu</a>.
          </li>
          <li>
            For CS50-related communication, contact <a href="mailto:brian@cs50.harvard.edu">brian@cs50.harvard.edu</a>.
          </li>
          <li>
            For Crimson-related communication, contact <a href="mailto:brian.yu@thecrimson.com">brian.yu@thecrimson.com</a>.
          </li>
        </ul>
      </div>
    );
  }

}