import React from 'react';
import './ShowUpcomingShows.css';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineDatabase } from 'react-icons/ai';



const ShowUpcomingShows = ({ shows }) => {
    const { name, img, sub } = shows;

    return (
        <>
            <div className="col mb-3">
                <div className="card card-bg custom-radius shadow">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <button className="btn card-btn mb-3">{sub}</button>
                        <h5 class="card-title text-white">{name}</h5>
                    </div>
                    <div className="card-footer custom-card-footer d-flex justify-content-between pb-3">
                        <a href="/" className='text-decoration-none nunito-font fw-bold'>
                            More Info <BsArrowRight className='fs-2'/>
                        </a>
                        <span className='fs-4 custom-border ps-3' style={{color: '#CC3CC9'}}>
                            <AiOutlineDatabase />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowUpcomingShows;