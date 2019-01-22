import React, { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Head from "next/head";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles
    };
  }

  render() {
    let i = 1;
    this.state.articles.map(obj => {
      obj.id = i++;
    });

    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/index.css" />
        </Head>
        <Layout>
          <ul>
            {this.state.articles.map(obj => (
              <li style={{ listStyleType: "none" }} key={obj.id}>
                <Link as={`/article/${obj.id}`} href={`/post?id=${obj.id}`}>
                  <a> {obj.title} </a>
                </Link>
              </li>
            ))}
          </ul>
        </Layout>
      </React.Fragment>
    );
  }
}

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://interview-project-17987.herokuapp.com/api/article"
  );
  const data = await res.json();

  console.log(`Article data fetched. Count: ${data.length}`);

  return {
    articles: data
  };
};

export default Index;
