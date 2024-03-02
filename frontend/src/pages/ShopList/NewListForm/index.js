import React, { useState } from 'react';

const NewListForm = ({ onCancel }) => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddProduct = () => {
        if (!productName.trim() || !quantity.trim()) {
            alert('Please enter product name and quantity.');
            return;
        }
        const newProduct = {
            id: products.length + 1,
            name: productName,
            quantity: quantity,
            checked: false
        };
        setProducts([...products, newProduct]);
        setProductName('');
        setQuantity('');
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
      
        setProductName('');
        setQuantity('');
        onCancel();
    };

    const handleFinish = () => {
        if (products.length === 0) {
            alert('Please add at least one product.');
            return;
        }
        setProductName('');
        setQuantity('');
        setProducts([]);
        alert('Form submitted successfully!');
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-md shadow-md">
            <h2 className='text-3xl text-center text-pink-400 font-bold mb-6'>
                New Shopping List
            </h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-white text-sm font-semibold mb-2">Product Name</label>
                    <input 
                        id="productName" 
                        placeholder="e.g. Milk" 
                        className="w-full px-3 py-2 border rounded-lg bg-gray-500 focus:border-blue-500" 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-white text-sm font-semibold mb-2">Quantity</label>
                    <input 
                        id="quantity" 
                        placeholder="e.g. 2" 
                        className="w-full px-3 py-2 border rounded-lg bg-gray-500 focus:border-blue-500" 
                        type="text" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                    />
                </div>
                <button type="button" onClick={handleAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Add Product
                </button>
                <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Cancel
                </button>
                <button type="button" onClick={handleFinish} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Finish
                </button>
            </form>
            <div className="mt-8">
                <h3 className="text-xl text-white font-semibold mb-2">Products:</h3>
                <table className="text-white w-full">
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
    );
};

export default NewListForm;
