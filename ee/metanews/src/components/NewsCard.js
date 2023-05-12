import React, { Component } from 'react';

export class NewsCard extends Component {
    render() {
        return (
            <div className="card" style={{
                width: "18rem", height: "100%"
            }
            }>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ left: "50%" }}>{this.props.source.name}</span>
                <img src={this.props.urlToImage} className="card-img-top" alt="..." style={{
                    height: "10rem"
                }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text"><small className="text-muted">By {this.props.author} on {this.props.date}</small></p>
                    <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark mt-auto">Read More</a>
                </div>
            </div >
        )
    }
}

export default NewsCard;