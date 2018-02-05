import React, { Component } from "react";
import RestoRank from "../partials/stats/restoRanking";
import Banner from "../partials/banner";
import Layout from "../layout";

class Stats extends Component {
    compare = (a, b) => {
        const restoA = a.visits;
        const restoB = b.visits;

        let comparison = 0;

        if (restoA > restoB) {
            comparison = 1;
        } else if (restoA < restoB) {
            comparison = -1;
        }
        return comparison * -1;
    };

    render() {
        var restoObj = this.props.restaurants;

        var allTimeArr = restoObj.sort(this.compare);
        allTimeArr = allTimeArr.slice(0, 10);

        return (
            <Layout>
                <Banner 
                    title="Stats" 
                    subtitle="Top restaurants by visits" 
                    image="/images/header-3.jpg"
                />
                <h2>All Time</h2>
                <ul className="stats-list">
                    {allTimeArr.map((r, index) => {
                        return <RestoRank name={r.name} key={r.id} rank={index + 1} visits={r.visits}/>;
                    })}
                </ul>
            </Layout>
        );
    }
}

export default Stats;
