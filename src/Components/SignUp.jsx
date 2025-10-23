import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../Firebase/Firebase.init';

const SignUp = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // // reset error & succes
        // setError('');
        // setSuccess(false);

        createUser(email, password)
            .then(result => {
                console.log('after creation of a new user', result.user)
                setSuccess(true);
                event.target.reset();
            })
            .catch(error => {
                console.log('error happend', error.message)
                setError(error.message);
            })

    }

    //     // const passwordPattern = /^.{6,}$/;
    //     // if (!passwordPattern.test(password)) {
    //     //     console.log("password didn't match.")
    //     //     setError('Password must be at least 6 characters.')
    //     //     return;
    //     // }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" name='name' placeholder="Name" />
                                {/* <label className="label">Photo-URL</label>
                                <input type="" className="input" name='image' placeholder="image" /> */}
                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'}
                                        className="input"
                                        name='password' placeholder="Password" />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="btn btn-xs absolute top-2 right-4">eye</button>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                            </fieldset>
                            <p>Already have an account? Please <Link to='/login' className='text-blue-500 hover:text-blue-800'>login</Link></p>
                            {
                                success && <p className='text-green-500'>Account Created Successfully!</p>
                            }
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;