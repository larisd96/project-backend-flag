import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const NewListForm = ({ onCancel }) => {
    const { register, handleSubmit, reset } = useForm();
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = (data) => {
        if (!data.productName || !data.quantity) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        const newProduct = {
            id: products.length + 1,
            name: data.productName,
            quantity: data.quantity,
            checked: false
        };
        setProducts([...products, newProduct]);
        reset(); 
        setErrorMessage(''); 
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    const handleToggleCheck = (id) => {
        const updatedProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, checked: !product.checked };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const handleCancel = () => {
        reset(); 
        onCancel();
        setErrorMessage(''); 
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-100">
                <h2 className="text-2xl font-semibold mb-4">New Shopping List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Product Name</label>
                        <input 
                            id="productName" 
                            placeholder="e.g. Milk" 
                            {...register('productName')} 
                            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" 
                            type="text" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
                        <input 
                            id="quantity" 
                            placeholder="e.g. 2" 
                            {...register('quantity')} 
                            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" 
                            type="text" 
                        />
                    </div>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Add Product
                        </button>
                        <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Products:</h3>
                    <div className="overflow-x-auto">
                        <table className="text-gray-700 w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 w-1/3 sm:w-auto">Product Name</th>
                                    <th className="px-4 py-2 w-1/3 sm:w-auto">Quantity</th>
                                    <th className="px-4 py-2 w-1/3 sm:w-auto">Checked</th>
                                    <th className="px-4 py-2 w-1/3 sm:w-auto">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td className="border px-4 py-2">{product.name}</td>
                                        <td className="border px-4 py-2">{product.quantity}</td>
                                        <td className="border px-4 py-2">{product.checked ? 'Yes' : 'No'}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => handleToggleCheck(product.id)} className="text-blue-500 mr-2">Check</button>
                                            <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewListForm;
