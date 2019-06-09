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

    const dce = "https://www.dce.harvard.edu/";
    const cs50 = "https://cs50.harvard.edu/";
    const cs100 = "https://cs.harvard.edu/100";
    const web = "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript";
    const crimson = "https://www.thecrimson.com/";
    const palantir = "https://www.palantir.com/";

    return (
      <div>
        <h2>Hello!</h2>
        <p>
          I'm Brian, a Senior Preceptor at Harvard's <a href={dce}>Division of Continuing Education</a>.
          I graduated from Harvard College in 2019 with a degree in computer science and linguistics.

          I currently work with the team at <a href={cs50}>CS50</a>,
          Harvard's introductory course in computer science, where I focus on curricular development, outreach, and software tools.

          I'm also the instructor for <a href={web}>Web Programming with Python and JavaScript</a> on
          edX, Harvard Extension School and Harvard Summer School.

          I have previously worked with a number of other computer science classes, including
          CS51, Harvard's course on abstraction and design in computing,
          CS124, Harvard's introduction to algorithms,
          and <a href={cs100}>CS100</a>, Harvard's course on software engineering in the digital humanities.

          Outside of computer sciende education, I've also been a software engineering intern at <a href={palantir}>Palantir</a>,
          a news executive and digital strategist at <a href={crimson}>The Harvard Crimson</a>,
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
            or <a href="mailto:brianyu@alumni.harvard.edu">brianyu@alumni.harvard.edu</a>.
          </li>
          <li>
            For CS50-related communication, contact <a href="mailto:brian@cs50.harvard.edu">brian@cs50.harvard.edu</a>.
          </li>
        </ul>
      </div>
    );
  }

}
