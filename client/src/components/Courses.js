import React from "react";
import { Timeline } from "antd";

export default class Courses extends React.Component {

  render() {
    return (
      <div className="courses">
        {this.renderCoursesTaught()}
        {this.renderCoursesTaken()}
      </div>
    );
  }

  renderCoursesTaught() {

    return (
      <div>
        <h2>Courses I've Taught</h2>
        <Timeline>
          <Timeline.Item>
            <p>
              <b>Summer 2019</b>
              <br/>Computer Science S-33a: Web Programming with Python and JavaScript (Instructor, Harvard Summer School)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2019</b>
              <br/>Computer Science E-33a: Web Programming with Python and JavaScript (Instructor, Harvard Extension School)
              <br/>Computer Science 124: Data Structures and Algorithms (Teaching Fellow, Harvard College)
              <br/>Computer Science 51: Abstraction and Design in Computation (Teaching Fellow, Harvard College)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Winter 2019</b>
              <br/>CS50 Beyond (Instructor, Harvard College Wintersession)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2018</b>
              <br/>Computer Science 50: Introduction to Computer Science (Head Teaching Fellow, Harvard College)
              <br/>Computer Science 100: Software Engineering in the Arts and Humanities (Head Teaching Fellow, Harvard College)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2018</b>
              <br/>Computer Science E-33a: Web Programming with Python and JavaScript (Instructor, Harvard Extension School)
              <br/>Computer Science 20: Discrete Mathematics for Computer Science (Teaching Fellow, Harvard College)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2017</b>
              <br/>Computer Science 50: Introduction to Computer Science I (Head Course Assistant, Harvard College)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer 2017</b>
              <br/>Computer Science P-14300: Introduction to Web Programming (Teaching Fellow, Harvard Summer School)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2017</b>
              <br/>Computer Science 51: Abstraction and Design in Computation (Teaching Fellow, Harvard College)
              <br/>Computer Science E-50: Intensive Introduction to Computer Science (Course Assistant, Harvard Extension School)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2016</b>
              <br/>Computer Science 50: Introduction to Computer Science I (Teaching Fellow, Harvard College)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Summer 2016</b>
              <br/>Computer Science P-14300: Introduction to Web Programming (Teaching Fellow, Harvard Summer School)
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }

  renderCoursesTaken() {

    return (
      <div>
        <h2>Courses I've Taken</h2>
        <Timeline>
        <Timeline.Item>
            <p>
              <b>Spring 2019</b>
              <br/>Computer Science 191: Classics of Computer Science
              <br/>Linguistics 106: Knowledge of Meaning
              <br/>Linguistics 99b: Tutorial
              <br/>History of Science 128: The Century of Physics
            </p>
            <p>
              <b>Fall 2018</b>
              <br/>Computer Science 153: Compilers
              <br/>Linguistics 105: Sounds of Language
              <br/>Computer Science 90ncr: Law for Algorithms
              <br/>Computer Science 91r: Supervised Reading and Research (with Stuart Shieber)
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2018</b>
              <br/>Computer Science 152: Programming Languages
              <br/>Linguistics 98b: Tutorial
              <br/>United States in the World 42: The Democracy Project
              <br/>Psychology 1002: Evolving Morality
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2017</b>
              <br/>Computer Science 182: Artificial Intelligence
              <br/>Linguistics 102: Sentence Structure
              <br/>Statistics 110: Introduction to Probability
              <br/>Government 1510: American Constitutional Law
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2017</b>
              <br/>Computer Science 124: Data Structures and Algorithms
              <br/>Linguistics 101: The Science of Language
              <br/>Math 21b: Linear Algebra and Differential Equations
              <br/>Science of the Physical Universe 22: The Unity of Science
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2016</b>
              <br/>Computer Science 61: Systems Programming and Machine Organization
              <br/>Computer Science 121: Introduction to the Theory of Computation
              <br/>Math 21a: Multivariable Calculus
              <br/>Culture and Belief 45: History of the English Language
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Spring 2016</b>
              <br/>Computer Science 51: Abstraction and Design in Computation
              <br/>Computer Science 20: Discrete Math for Computer Science
              <br/>Empirical and Mathematical Reasoning 11: Language, Logic, and Interpretation
              <br/>Latin Ab: Beginning Latin
            </p>
          </Timeline.Item>
          <Timeline.Item>
            <p>
              <b>Fall 2015</b>
              <br/>Computer Science 50: Introduction to Computer Science I
              <br/>Economics 10a: Principles of Economics
              <br/>Latin Aa: Beginning Latin
              <br/>Expository Writing 20 - 220: Humans, Nature, and the Environment
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }

}
