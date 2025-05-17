import React from 'react';
import { Link } from 'react-router';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());

        //Send data to the database via server
        fetch('https://cafe-hub-server-with-auth.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Coffee Added Successfully!')
            }
            form.reset();
        })
    }

    return (
        <div className='p-24'>
            <Link to={'/'}>Back to Home</Link>
            <div className='p-12 text-center space-y-3'>
                <h1 className='text-5xl'>Add a New Coffee</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} action="" className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Enter coffee's name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="number" name="quantity" className="input w-full" placeholder="Enter coffee's quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name="supplier" className="input w-full" placeholder="Enter coffee's supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name="taste" className="input w-full" placeholder="Enter coffee's taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="number" name="price" className="input w-full" placeholder="Enter coffee's price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name="details" className="input w-full" placeholder="Enter coffee's details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="label">Photo</label>
                    <input type="text" name="photo" className="input w-full" placeholder="Enter coffee's photo url" />
                </fieldset>
                <input type="submit" value="Add Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default AddCoffee;