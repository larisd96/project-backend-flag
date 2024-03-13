import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center mb-8"> WELCOME IHOME</h1>
            {/* <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
                <Login />
            </div> */}
            <footer className="mt-8 text-gray-500 text-sm text-center">
                &copy; 2024 MyApp. Todos os direitos reservados.
            </footer>
        </div>
    );
}

export default Home;
