import React from 'react';
import './ShowSatisfyContent.css';

const ShowSatisfyContent = ({ data }) => {
    const { icon, title, value } = data;

    return (
        <>
            <div className="col d-flex justify-content-center">
                <div className="circle text-white d-flex flex-column justify-content-center align-items-center ">
                    <h3 className='text-primary'>{icon}</h3>
                    <h3 className=''>{value}</h3>
                    <h5 className='nunito-font'> {title}</h5>
                </div>
            </div>
        </>
    );
};

export default ShowSatisfyContent;