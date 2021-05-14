import React from 'react';
import './ShowingSatisfyData.css';


const ShowingSatisfyData = ({ data }) => {
    const { icon, title } = data;

    return (
        <>
            <div class="col d-flex justify-content-center">
                <div className="circle text-white d-flex flex-column justify-content-center align-items-center ">
                    <h3 className='text-primary'>{icon}</h3>
                    <h3 className=''>0</h3>
                    <h5 className='nunito-font'> {title}</h5>
                </div>
            </div>
        </>
    );
};

export default ShowingSatisfyData;