import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://media.assettype.com/bloombergquint%2F2022-06%2Fe516555b-62b3-45a3-aa19-98c906638c6b%2FCrystal_globe_with_stock_information___Source_freepik_.jpg?rect=0%2C275%2C5760%2C3024&w=1200&auto=format%2Ccompress&ogImage=true"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" style={{ backgroundColor: "aliceblue" }}>
            <h5 className="card-title">{title}</h5>
            <p>
              Source-
              <span
                className="badge rounded-pill text-bg-danger mx-1"
                style={{ left: "88%", zIndex: "1" }}
              >
                {source}
              </span>
            </p>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last Update on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
