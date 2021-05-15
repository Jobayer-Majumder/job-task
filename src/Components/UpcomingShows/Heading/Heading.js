import React from 'react';

const Heading = () => {
    return (
        <>
            <div className="container d-flex justify-content-between pt-5 mb-5">
                <h1 className='after-effect text-white'>Upcoming Shows</h1>
                <a href='/' className='mt-3 text-decoration-none' style={{color: '#E5C558'}}>View All</a>
            </div>
        </>
    );
};

export default Heading;