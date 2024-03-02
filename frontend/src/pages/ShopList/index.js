import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import NewListForm from './NewListForm';

const ShopList = () => {
    const [listName, setListName] = useState('');
    const [lists, setLists] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showNewListForm, setShowNewListForm] = useState(false);

    useEffect(() => {
        const storedLists = JSON.parse(localStorage.getItem('shoppingLists')) || [];
        const initializedLists = storedLists.map(list => ({ ...list, checked: false }));
        setLists(initializedLists);
    }, []);

    useEffect(() => {
        localStorage.setItem('shoppingLists', JSON.stringify(lists));
    }, [lists]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listName.trim() === '') {
            setErrorMessage('Please enter a list name.');
            return;
        }
        setLists([...lists, { name: listName, checked: false }]);
        setListName('');
        setErrorMessage('');
        setShowNewListForm(true); 
    };

    const handleDelete = (index) => {
        const updatedLists = [...lists];
        updatedLists.splice(index, 1);
        setLists(updatedLists);
    };

    const handleToggleCheck = (index) => {
        const updatedLists = [...lists];
        updatedLists[index].checked = !updatedLists[index].checked;
        setLists(updatedLists);
    };

    const handleCancelNewList = () => {
        setListName('');
        setShowNewListForm(false);
    };

    return (
        <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-md shadow-md">
            <h2 className='text-3xl text-center text-pink-400 font-bold mb-6'>
                Shopping List
            </h2>
            {!showNewListForm && (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="listName" className="block text-white text-sm font-semibold mb-2">List Name</label>
                        <input 
                            id="listName" 
                            placeholder="e.g. List IKEA" 
                            className="w-full px-3 py-2 border rounded-lg bg-gray-500 focus:border-blue-500" 
                            type="text" 
                            value={listName} 
                            onChange={(e) => setListName(e.target.value)} 
                        />
                        {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>}
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Create New List
                        </button>
                    </div>
                </form>
            )}
            {showNewListForm && <NewListForm onCancel={handleCancelNewList} />}
            <div className="mt-8">
                <h3 className="text-xl text-white font-semibold mb-2">Lists:</h3>
                <ul className="text-white">
                    {lists.map((list, index) => (
                        <li key={index} className="flex justify-between items-center">
                            <div>
                                <input 
                                    type="checkbox" 
                                    checked={list.checked} 
                                    onChange={() => handleToggleCheck(index)} 
                                    className="mr-2" 
                                />
                                {/* Renderize o nome da lista dentro de um Link */}
                                <Link to={`/shop-list/${encodeURIComponent(list.name)}`} className={list.checked ? "line-through hover:text-blue-400 cursor-pointer" : "hover:text-blue-400 cursor-pointer"}>{list.name}</Link>
                            </div>
                            <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShopList;
