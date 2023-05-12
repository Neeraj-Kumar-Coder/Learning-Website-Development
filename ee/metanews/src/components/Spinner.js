import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            this.props.loading && <div className="overlay" style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "99",
                backgroundColor: "#00000075"
            }}>
                <div className="spinner-border" role="status">
                </div>
            </div>
        )
    }
}

export default Spinner;