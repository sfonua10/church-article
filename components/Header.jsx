import React, { Component } from "react";
import Head from "next/head";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/header.css" />
        </Head>
        <header>
          <nav>
            <ul>
              <li className="logo">
                <a href="/">Articles</a>
                <i className="fa fa-file-code-o" aria-hidden="true" />
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
