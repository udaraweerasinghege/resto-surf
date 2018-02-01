import React, { Component } from "react";

class RestoRank extends Component {
    render() {
        return (
            <li key={this.props.name}>
                <p>{this.props.rank}</p>
                <p>{this.props.name}</p>
                <p>{this.props.visits}</p>
            </li>
        )
    }
}

export default RestoRank;