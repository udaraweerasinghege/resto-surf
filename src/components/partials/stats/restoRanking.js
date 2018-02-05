import React, { Component } from "react";

class RestoRank extends Component {
    render() {
        return (
            <li className="resto-rank-tile" key={this.props.name}>
                <a href={this.props.name}>
                    <p className="resto-rank-tile-rank">{this.props.rank}</p>
                    <p className="resto-rank-tile-name">{this.props.name}</p>
                    <p className="resto-rank-tile-visits">
                        {this.props.visits}
                    </p>
                </a>
            </li>
        );
    }
}

export default RestoRank;
