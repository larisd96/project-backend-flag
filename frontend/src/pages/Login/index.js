import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { ihomeApi } from '../../api';
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try { 
      await ihomeApi.post("/login", data, { withCredentials: true })

      navigate("/")
    } catch (error) {
      navigate("/login")
      alert("error to login", error.message)
    }
  };

  const handleUserRegistrationClick = () => {
    navigate("/user-registration");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" {...register('email', { required: true })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" {...register('password', { required: true })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 rounded mr-2">Login</button>
          <button type="button" onClick={handleUserRegistrationClick} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
