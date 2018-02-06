import React, { Fragment } from "react";

export default ({ subtitle, image, title }) => {
    var Subtitle = (subtitle) => {
        if (subtitle) {
            return (
                <Fragment>
                    <h2 className="banner-subtitle">{subtitle}</h2>
                </Fragment>
            )
        }
    }

    var Title = (title) => {
        if (title) {
            return (
                <div className="banner-header-details">
                    <h1 className="banner-title">{title}</h1>
                    <hr className="banner-divider" />
                    {Subtitle(subtitle)}
                </div>
            )
        }
    }

    var RandomHeader = () => {
        //Exclusive
        const max = 6;
        //Inclusive
        const min = 1;
        return Math.floor(Math.random() * (max - min) + min);
    }

    var BannerImage = (image) => {
        var bannerImage;
        if (image) {
            bannerImage = image;
        } else {
            bannerImage = `/images/header-${RandomHeader()}.jpg`;
        }    
        
        var headerStyle = {
            backgroundImage: `url('${bannerImage}')`
        };

        return (
            <div className="banner-header" style={headerStyle} />
        )
    }

    return (
       <Fragment>
            {BannerImage(image)}
            {Title(title)}
        </Fragment>
    )
};