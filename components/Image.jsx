import React, { Component } from "react";
import Head from "next/head";

class Image extends Component {
  state = {
    imageInfo: this.props.images,
    mainImage: this.props.images[0].mainUrl,
    imageTitle: this.props.images[0].title,
    imageDescription: this.props.images[0].description
  };

  handleImageClick = (newUrl, newTitle, newDescr) => {
    this.setState({
      mainImage: newUrl,
      imageTitle: newTitle,
      imageDescription: newDescr
    });
  };

  render() {
    let blackBorder = {
      border: "3px solid border"
    };
    let noBorder = {
      border: "none"
    };

    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/static/image.css" />
        </Head>
        <img src={`http://${this.state.mainImage}`} />
        <div className="t-container">
          <div className="description">
            <h2>{this.state.imageTitle}</h2>
            <h3>{this.state.imageDescription}</h3>
          </div>
          <div className="thumb-contain">
            {this.state.imageInfo.map(thumbnails => (
              <img
                align="right"
                className="thumbnail"
                alt={thumbnails.description}
                src={`http://${thumbnails.thumbnailUrl}`}
                onClick={() =>
                  this.handleImageClick(
                    thumbnails.mainUrl,
                    thumbnails.title,
                    thumbnails.description
                  )
                }
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;
