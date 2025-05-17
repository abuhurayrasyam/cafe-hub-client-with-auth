import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const {_id, name, quantity, supplier, taste, price, details, photo} = useLoaderData();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        // Send updated coffee to database
        fetch(`https://cafe-hub-server-with-auth.vercel.app/coffees/${_id}`, {
            method: 'PUT',
             headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Coffee updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }

    return (
        <div className='p-24'>
            <Link to={'/'}>Back to Home</Link>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-5xl'>Update a Coffee</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee} action="" className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Enter coffee's name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="number" name="quantity" defaultValue={quantity} className="input w-full" placeholder="Enter coffee's quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" defaultValue={supplier} className="input w-full" placeholder="Enter coffee's supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" defaultValue={taste} className="input w-full" placeholder="Enter coffee's taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="number" name="price" defaultValue={price} className="input w-full" placeholder="Enter coffee's price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name="details" defaultValue={details} className="input w-full" placeholder="Enter coffee's details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Photo</label>
                    <input type="text" name="photo" defaultValue={photo} className="input w-full" placeholder="Enter coffee's photo url" />
                </fieldset>
                <input type="submit" value="Update Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default UpdateCoffee;