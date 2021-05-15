import React from 'react';
import UpcomingShowsContent from '../ShowUpcomingShows/UpcomingShowsContent';
import ShowsData from './ShowsCardData';


const ShowsCard = () => {
    return (
        <section>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {
                        ShowsData.map((shows, index) => <UpcomingShowsContent key={index ++} shows={shows}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ShowsCard;