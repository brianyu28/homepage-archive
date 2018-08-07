import React from "react";
import { Card } from "antd";

import "../css/Posts.css";

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      title: "",
      datetime: "",
      contents: ""
    }
  }
  componentDidMount() {
    const { identifier } = this.props;
    fetch(`/posts/${identifier}`)
    .then(res => res.text())
    .then(text => {
      const data = text.split("\n");
      this.setState({
        title: data[0],
        datetime: data[1],
        contents: data.slice(2).join("\n"),
        isLoading: false
      });
    })
  }

  render() {
    return (
      <Card loading={this.state.isLoading} className="card" title={this.state.title} extra={this.state.datetime}>
        <div dangerouslySetInnerHTML={{__html: this.state.contents}} />
      </Card>
    );
  }
}

export default class Posts extends React.Component {

  render() {
    return (
      <div className="posts">
        {this.renderPosts()}
      </div>
    );
  }

  renderPosts() {
    return (
      <div>
        <Post identifier="01.edx.html" />
      </div>
    );
  }

}