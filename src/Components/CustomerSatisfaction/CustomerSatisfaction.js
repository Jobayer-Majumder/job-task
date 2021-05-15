import React from 'react';
import ShowSatisfyXContent from './ShowSatisfyContent/ShowSatisfyContent';
import data from './SatisfactionData/SatisfactionData';





const CustomerSatisfaction = () => {
    return (
        <section style={{background: '#0A0B1A', paddingBottom: '50px'}}>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        data.map((data, index) => <ShowSatisfyXContent key={index ++} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerSatisfaction;