import PropTypes from "prop-types";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general",
    };

    static propTypes = {
        name: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
        document.title = `NewsMonkey - ${this.capitalizeFirstLetter(
            this.props.category
        )}`;
    }
    async UpdateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e00c22ca4c4e4c1bab8f8c23aa2ea988&page=${this.props.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.UpdateNews();
    }


    fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e00c22ca4c4e4c1bab8f8c23aa2ea988&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({page: this.state.page + 1});
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
        };

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: "56px 0px 7px" }}>
                    NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
                    Headlines!
                </h1>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className="container">

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3" key={element.url}>
                                <NewsItem
                                    title={
                                        element.title ? element.title.slice(0, 45) : element.title
                                    }
                                    description={
                                        element.description
                                        ? element.description.slice(0, 88)
                                        : element.description
                                    }
                                    imageUrl={element.urlToImage}
                                    content={element.content}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                    />
                            </div>
                        );
                    })}
                </div>
                </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default News;
