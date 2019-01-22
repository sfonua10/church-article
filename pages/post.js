import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Image from "../components/Image";
import Video from "../components/Video";
import Header from "../components/Header";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article
    };
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/post.css" />
        </Head>

        <div className="container">
          <Header />
          <div className="wrapper">
            <section className="main">
              <h1> {this.state.article.title} </h1>
              <Image
                key={this.state.article.url}
                images={this.state.article.images}
              />

              <br />
              <div className="content-container">
                <Video
                  key={this.state.article.video.url}
                  video={this.state.article.video}
                />
                {this.state.article.content.map(text => (
                  <React.Fragment>
                    <h4>{text.subtitle}</h4>
                    <br />
                    <p>{text.text}</p>
                  </React.Fragment>
                ))}
                <br />
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://interview-project-17987.herokuapp.com/api/article/article-${id}`
  );
  const article = await res.json();

  console.log(`Fetched article: ${article.url}`);

  return {
    article
  };
};

export default Post;
