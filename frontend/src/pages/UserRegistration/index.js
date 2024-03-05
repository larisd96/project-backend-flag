import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { ihomeApi } from '../../api';

const UserRegistration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
  try {
    await ihomeApi.post("/login/register", data)
    navigate("/login");
  } catch (error) {
    alert("error to register new user", error.message)
    
  } 
    
  };

  const password = watch("password");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" {...register('name', { required: true })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" {...register('password', { required: true })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="passwordConfirm" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input type="password" id="passwordConfirm" {...register('passwordConfirm', { required: true, validate: value => value === password })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.passwordConfirm && <span className="text-red-500">Please confirm your password</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" {...register('email', { required: true })} className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;