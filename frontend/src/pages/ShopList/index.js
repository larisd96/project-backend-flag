import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewListForm from './NewListForm';
import ShopListItems from './ShopListItems'; 

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
        setLists([...lists, { name: listName, checked: false, items: [] }]);
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
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Shopping List</h2>
                {!showNewListForm ? (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="mb-4">
                            <label htmlFor="listName" className="block text-gray-700 font-bold mb-2">List Name</label>
                            <input 
                                id="listName" 
                                placeholder="e.g. List IKEA" 
                                className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500" 
                                type="text" 
                                value={listName} 
                                onChange={(e) => setListName(e.target.value)} 
                            />
                            {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Create New List
                            </button>
                        </div>
                    </form>
                ) : (
                    <NewListForm onCancel={handleCancelNewList} />
                )}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Lists:</h3>
                    <ul>
                        {lists.map((list, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <div>
                                    <input 
                                        type="checkbox" 
                                        checked={list.checked} 
                                        onChange={() => handleToggleCheck(index)} 
                                        className="mr-2" 
                                    />
                                    <Link to={`/shop-list-items/${encodeURIComponent(list.name)}`} className={list.checked ? "line-through hover:text-blue-400 cursor-pointer" : "hover:text-blue-400 cursor-pointer"}>{list.name}</Link>
                                </div>
                                <button onClick={() => handleDelete(index)} className="text-red-500">Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShopList;
