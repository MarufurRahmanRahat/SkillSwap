import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {

      const [success, setSuccess] = useState(false);
        const [error, setError] = useState('');
        const [showPassword, setShowPassword] = useState(false);

    const {signInUser} = use(AuthContext);
     
    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email,password)
        .then(result => {
                console.log('after login of a new user', result.user)
                event.target.reset();
            })
            .catch(error => {
                console.log('error happend', error.message)
                // setError(error.message);
            })
    }

    //  const [success, setSuccess] = useState(false);
    //     const [error, setError] = useState('');
    //     const [showPassword, setShowPassword] = useState(false);
    
    //     const handleRegister = (event) => {
    
    //         event.preventDefault();
    //         const email = event.target.email.value;
    //         const password = event.target.password.value;
    //         console.log('register clicked', email, password);
    
    //         const passwordPattern = /^.{6,}$/;
    //         if (!passwordPattern.test(password)) {
    //             console.log("password didn't match.")
    //             setError('Password must be at least 6 characters.')
    //             return;
    //         }
    
    //         // reset error & succes
    //         setError('');
    //         setSuccess(false);
    
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then(result => {
    //                 console.log('after creation of a new user', result.user)
    //                 setSuccess(true);
    //                 event.target.reset()
    //             })
    //             .catch(error => {
    //                 console.log('error happend', error.message)
    //                 setError(error.message);
    //             })
    //     }
    

    return (
       <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogIn}>
                            <fieldset className="fieldset">
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
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <p>Don't have an account? Please <Link to='/signup' className='text-blue-500 hover:text-blue-800'>SignUp</Link></p>
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

export default Login;