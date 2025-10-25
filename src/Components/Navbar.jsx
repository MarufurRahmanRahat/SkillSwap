import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import '../App.css'
import { AuthContext } from '../Contexts/AuthContext';
import { DiSenchatouch } from 'react-icons/di';


const Navbar = () => {

    const { user, signOutUSer } = use(AuthContext)

    const handleSignOut = () => {
        signOutUSer()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myprofile">My Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>Hife</li>
                        {links}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <Link to='/'><DiSenchatouch className='w-8 h-8' /></Link>
                    <Link to='/' className=" hidden sm:block text-xl">SkillSwap</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    {/* <img className='w-12 rounded-full mx-2' src={`${user && user.photoURL }`} referrerPolicy='no-referrer' alt=''></img> */}
                    <div className="dropdown dropdown-hover mr-4 pt-2 ">
                        <div tabIndex={0}  className="outline-none cursor-pointer w-12 rounded-full  ">
                            <img className='w-12 rounded-full ' src={`${user && user.photoURL }`} referrerPolicy='no-referrer' alt=''></img>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box  w-32 p-2 shadow-sm z-10">
                            <li><a className='text-red-900'>{`${user && user.displayName}`}</a></li>
                           
                        </ul>
                    </div>
                </div>
                {
                    user ? <a onClick={handleSignOut} className="btn">Log out</a>
                        : <>
                            <Link className='btn mr-1' to='/login'>Login</Link>
                            <Link className='btn' to='/signup'>SignUp</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;