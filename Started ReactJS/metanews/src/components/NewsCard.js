import React, { Component } from 'react';

export class NewsCard extends Component {
    render() {
        return (
            <div className="card" style={{
                width: "18rem", height: "100%"
            }
            }>
                <img src={this.props.urlToImage} className="card-img-top" alt="..." style={{
                    height: "10rem"
                }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mt-auto">Read More</a>
                </div>
            </div >
        )
    }
}

export default NewsCard;