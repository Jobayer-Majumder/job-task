import React from 'react';
import Heading from '../Heading/Heading';
import ShowsCard from '../ShowsCard/ShowsCard';

const UpcomingShows = () => {
    return (
        <section style={{ background: '#0A0B1A', paddingTop: '60px'}}>
            <Heading />
            <ShowsCard />
        </section>
    );
};

export default UpcomingShows;