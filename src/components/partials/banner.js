import React, { Component, Fragment } from "react";

class Banner extends Component {

    Subtitle = (subtitle) => {
        if (subtitle) {
            return (
                <Fragment>
                    <h2 className="banner-subtitle">{subtitle}</h2>
                </Fragment>
            )
        }
    }

    Title = (title) => {
        if (title) {
            return (
                <div className="banner-header-details">
                    <h1 className="banner-title">{title}</h1>
                    <hr className="banner-divider" />
                    {this.Subtitle(this.props.subtitle)}
                </div>
            )
        }
    }

    RandomHeader = () => {
        //Exclusive
        const max = 6;
        //Inclusive
        const min = 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    BannerImage = (image) => {
        var bannerImage;
        if (image) {
            bannerImage = image;
        } else {
            bannerImage = `/images/header-${this.RandomHeader()}.jpg`;
        }    
        
        var headerStyle = {
            backgroundImage: `url('${bannerImage}')`
        };

        return (
            <div className="banner-header" style={headerStyle} />
        )
    }

    render() {
        
        return (
            <Fragment>
                {this.BannerImage(this.props.image)}
                {this.Title(this.props.title)}
            </Fragment>
        );
    }
}

export default Banner;
