import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        signInUser(email, password)
        .then((result) => {
            console.log(result);

            const signInInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime
            }
            // update lastSignInTime to the database
            fetch('https://cafe-hub-server-with-auth.vercel.app/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                    alert("User's Login Successfully!")
                }
                form.reset();
            })
        })
        .catch((error) => {
            console.log(error);
        })
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