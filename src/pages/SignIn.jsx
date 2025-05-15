import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {

    const handleSignIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="hero bg-base-200 min-h-screen -mt-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="font-semibold text-center">Login Your Account</h1>
                <form onSubmit={handleSignIn} className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Enter your email" required />
                <label className="label">Password</label>
                <input type="password" className="input" name="password" placeholder="Enter your password" required />
                <div>
                    <a className="link link-hover">Forgot password?</a>
                </div>
                {
                //   error && <p className="text-red-600">{error}</p>
                }
                <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <h4 className="text-accent text-center">Don't Have An Account ? <Link to={'/auth/register'} className="text-red-600">Register</Link></h4>
            </div>
        </div>
    </div>
    );
};

export default SignIn;