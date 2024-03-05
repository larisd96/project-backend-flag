import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const NewListForm = ({ onCancel }) => {
    const { register, handleSubmit, reset } = useForm();
    const [products, setProducts] = useState([]);

    const onSubmit = (data) => {
        const newProduct = {
            id: products.length + 1,
            name: data.productName,
            quantity: data.quantity,
            checked: false
        };
        setProducts([...products, newProduct]);
        reset(); // Reset the form fields after submission
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
        reset(); // Reset the form fields
        onCancel();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
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
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Add Product
                    </button>
                    <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Cancel
                    </button>
                </form>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Products:</h3>
                    <table className="text-gray-700 w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Product Name</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Checked</th>
                                <th className="px-4 py-2">Actions</th>
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
    );
};

export default NewListForm;
