import React from 'react';
import { useParams } from 'react-router-dom';

const ShopListItem = ({ item }) => {
    return (
        <tr className="hover:bg-gray-100">
            <td className="py-4 px-6 border-b">{item.name}</td>
            <td className="py-4 px-6 border-b">{item.quantity}</td>
            <td className="py-4 px-6 border-b">
                <input type="checkbox" checked={item.completed} readOnly />
            </td>
        </tr>
    );
};

const ShopListItems = ({ lists }) => {
    const { listName } = useParams();
    const list = lists.find(list => list.name === decodeURIComponent(listName));

    if (!list) {
        return <div className="text-center text-red-600 text-lg mt-8">List not found</div>;
    }

    return (
        <div className="container mx-auto mt-8 sm:w-full">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Items List: {list.name}</h2>
                    <table className="w-full">
                        <thead className="bg-gray-200 text-gray-600 uppercase">
                            <tr>
                                <th className="py-3 px-6 text-left">Item</th>
                                <th className="py-3 px-6 text-left">Quantity</th>
                                <th className="py-3 px-6 text-left">Completed</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {list.items.map((item, index) => (
                                <ShopListItem key={index} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShopListItems;
