import React from 'react';
import ShowingSatisfyData from './ShowingSatisfyData';
import { BsHeart } from 'react-icons/bs';
import { FiDollarSign } from "react-icons/fi";


const customerSatisfyData = [
    {
        icon: <BsHeart />,
        title: 'Label',
        data: '0'
    },
    {
        icon: <FiDollarSign />,
        title: 'Label',
        data: '0'
    },
    {
        icon: <BsHeart />,
        title: 'Label',
        data: '0'
    },
    {
        icon: <FiDollarSign />,
        title: 'Label',
        data: '0'
    },
];


const CustomerSatisfaction = () => {
    return (
        <section className='d-flex align-items-end' style={{height: '390px'}}>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    {
                        customerSatisfyData.map(data => <ShowingSatisfyData data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerSatisfaction;