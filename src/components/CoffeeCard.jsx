import React from 'react';

const CoffeeCard = ({coffeeData}) => {

    const {name, quantity, photo, price} = coffeeData;

    return (
        <div className="card card-side bg-base-100 shadow-sm p-10">
            <figure>
                <img src={photo} alt="Movie" />
            </figure>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="card-title">Name : {name}</h1>
                    <h4>Price : {price}</h4>
                    <h4>Quantity : {quantity}</h4>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item">Details</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;