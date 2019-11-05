import React, { Component } from "react";

export default class Loader extends Component {
    componentDidMount() {
        document.body.classList.add('loading');
    }
    
    componentWillUnmount() {
        document.body.classList.remove('loading');
    }

    render() {
        return (
            <div className="loader">
                <div className="one" />
                <div className="two" />
            </div>
        )
    }
};
