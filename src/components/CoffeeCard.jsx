import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffeeData, coffeesData, setCoffeesData}) => {

    const {_id, name, quantity, photo, price} = coffeeData;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {

                // Delete a Coffee
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({ // Its Part of Sweet Alert
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });

                        // Remove the coffee from the State
                        const remainingCoffees = coffeesData.filter(coffee  => coffee._id !== _id);
                        setCoffeesData(remainingCoffees);
                    }
                })
            }
        });
    }

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
                        <Link to={`/view-coffee/${_id}`}><button className="btn join-item">Details</button></Link>
                        <Link to={`/update-coffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;