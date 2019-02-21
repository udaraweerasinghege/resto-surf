import React from "react";
import {fromRenderProps, compose} from 'recompose'
import {AppContext} from "../../context/AppContext";
import RestoRank from "../partials/stats/restoRanking";
import Banner from "../partials/banner";
import Layout from "../layout";

const StatsPage = ({ restaurants }) => {

    var compare = (a, b) => {
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

    var allTimeArr = restaurants.sort(compare);
    allTimeArr = allTimeArr.slice(0, 10);

    return (
        <Layout>
            <Banner 
                title="Stats" 
                subtitle="Top restaurants by visits" 
                image="/images/header-3.jpg"
            />
            <div className="container">
                <h2>All Time</h2>
                <ul className="stats-list">
                    {allTimeArr.map((r, index) => 
                        <RestoRank name={r.name} key={r.id} rank={index + 1} visits={r.visits} slug={r.slug}/>
                    )}
                </ul>
            </div>
        </Layout>
    );
};

export default compose(fromRenderProps(AppContext.Consumer, (context) => (context)))(StatsPage)