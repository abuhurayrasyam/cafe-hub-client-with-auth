import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const SignUP = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...userProfile} = Object.fromEntries(formData.entries());

        createUser(email, password)
        .then((result) => {
            console.log(result);
            // Transfer and save users info to db via server
            fetch('http://localhost:3000/users', {
                 method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert("User's Information Added Successfully!")
                }
                form.reset();
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen -mt-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="font-semibold text-center">Register Your Account</h1>
                    <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" required />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photo' placeholder="Enter your photo url" required />
                    <label className="label">Your Address</label>
                    <input type="text" className="input" name='address' placeholder="Enter your address" required />
                    <label className="label">Your Phone Number</label>
                    <input type="number" className="input" name='phoneNumber' placeholder="Enter your phone number" required />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Enter your email" required />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Enter your password" required />
                    <div className='flex items-center gap-1 mt-2'>
                        <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
                        <a className="link link-hover">Accept Term & Conditions</a>
                    </div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <h4 className="text-accent text-center">Already Have An Account ? <Link to={'/auth/login'} className="text-red-600">Login</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default SignUP;