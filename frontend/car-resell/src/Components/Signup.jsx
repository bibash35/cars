import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupimg from '../assets/signupimg.jpg'; 
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

      if (!username && !email && !password) {
        toast.error('Signup failed, please try again');
      toast.error('Please fill all the fields');

    } else {
      if (!username) {
        toast.error('Signup failed, please try again');
        toast.error('Username is required');

      }
      if (!email) {
        toast.error('Signup failed, please try again');
        toast.error('Email is required');

      }
      if (!password) {
        toast.error('Signup failed, please try again');
        toast.error('Password is required');

      }
    }

    
  };

  return (
    <div className="h-screen flex">
      <div
        className="hidden lg:flex w-full lg:w-1/2 justify-around items-center bg-cover bg-center bg-gradient-to-t from-black via-transparent to-black"
        style={{
            backgroundImage: `url(${signupimg})`, 
        }}
      >
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-5" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Create an Account</h1>
            <p className="text-sm font-normal text-gray-600 mb-8">Join us today!</p>
            
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                id="username"
                className="pl-2 w-full outline-none border-none"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>

            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                id="email"
                className="pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-red-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Sign Up
            </button>

            <div className="  mt-4">
              <p className="text-left text-sm ">
                Already have an account?{" "}
                <Link to="/login" className="text-red-500 underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Toaster />

    </div>
  );
};

export default Signup;
