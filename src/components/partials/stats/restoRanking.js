import React, { Component } from "react";

class RestoRank extends Component {
    render() {
        return (
            <a className="resto-rank-tile" href={this.props.name}>
                <li key={this.props.name}>
                    <p className="resto-rank-tile-rank">{this.props.rank}</p>
                    <p className="resto-rank-tile-name">{this.props.name}</p>
                    <p className="resto-rank-tile-visits">{this.props.visits}</p>
                </li>
            </a>
        )
    }
}

export default RestoRank;