import React from 'react';
import { useLoaderData } from 'react-router';

const ViewCoffee = () => {

    const coffeeData = useLoaderData();
    const {photo} = coffeeData;

    return (
        <div>
            ViewCoffee
            <img src={photo} alt="" />
        </div>
    );
};

export default ViewCoffee;