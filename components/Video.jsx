import React, { Component } from "react";
import Head from "next/head";

class Video extends Component {
  state = {
    video: this.props.video
  };
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/video.css" />
        </Head>
        <div className="video-container">
          <iframe
            className="video-img"
            src={this.state.video.url}
            alt=""
            width="210"
            height="118"
          />

          <h5>{this.state.video.title}</h5>
          <h6>{this.state.video.description}</h6>
        </div>
      </React.Fragment>
    );
    t;
  }
}

export default Video;
