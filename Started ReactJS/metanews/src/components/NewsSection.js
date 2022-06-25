import React, { Component } from 'react';
import NewsCard from './NewsCard';

export class NewsSection extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        };
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b6c492dd282d458e83fa9ece22361081`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        });
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">Top headlines</h1>
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
        )
    }
}

export default NewsSection;