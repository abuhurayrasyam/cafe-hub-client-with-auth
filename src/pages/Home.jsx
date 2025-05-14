import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {

    const coffeesData = useLoaderData();
    console.log(coffeesData)
    return (
        <div>
            <h1 className='text-5xl text-center'>Our Popular Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    coffeesData.map(coffeeData => <CoffeeCard key={coffeeData._id} coffeeData={coffeeData}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;