import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Spinner from './Spinner';

export class NewsSection extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20,
            totalResults: -1
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b6c492dd282d458e83fa9ece22361081&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    prevHandler = async () => {
        this.setState({
            page: this.state.page - 1
        }, this.updateContent);
    }

    nextHandler = async () => {
        this.setState({
            page: this.state.page + 1
        }, this.updateContent);
    }

    updateContent = async () => {
        this.setState({
            loading: true
        })
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b6c492dd282d458e83fa9ece22361081&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        });
    }

    render() {
        return (
            <>
                <Spinner loading={this.state.loading} />
                <div className='container my-3'>
                    <h1 className="text-center my-3">Top headlines</h1>
                    <div className="row">
                        {
                            this.state.articles.map((element) => {
                                return (
                                    <div key={element.url} className="col-sm m-2">
                                        <NewsCard title={element.title ? element.title : `MetaNews - Read More`}
                                            description={element.description ? element.description.slice(0, 100) + "..." : `MetaNews - A news app to fullfill your daily news dose. Read More...`}
                                            urlToImage={element.urlToImage ? element.urlToImage : `https://images.hindustantimes.com/tech/img/2022/06/24/1600x900/_0106ce46-1cc2-11ea-9a0d-a0e38c0c67e3_1656050216463.jpg`}
                                            url={element.url} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark m-1" onClick={this.prevHandler}>&larr; Previous</button>
                    <button disabled={this.state.page === Math.ceil(this.state.totalResults / this.state.pageSize)} type="button" className="btn btn-dark m-1" onClick={this.nextHandler}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default NewsSection;