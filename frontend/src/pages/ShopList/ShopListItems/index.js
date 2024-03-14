import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { ihomeApi } from "../../../api";
import { useState } from "react";

const ShopListItems = ({ items }) => {
  const [shopList, setShopList] = useState(items);

  const navigate = useNavigate();

const editShopListStatus = async (id) => {
  try {
    await ihomeApi.put(`/shop-list/${id}`, {status:"COMPLETE"}, {withCredentials:true})
    const filterShopList = shopList.filter(item => item.id === id )
    filterShopList.status = "COMPLETE"
    setShopList(filterShopList)
  } catch (error) {
    alert("failed to change the status")
  }
} 

  const deleteShopList = async (id) => {
    try {
      await ihomeApi.delete(`/shop-list/${id}`, { withCredentials: true });

      setShopList(shopList.filter((item) => item.id !== id));
    } catch (error) {
      alert("failed to delete shop list.");
    }
  };

  return (
    <div className="flex flex-box justify-between">
      <button
        className="border border-black border-solid rounded p-3 m-2"
        onClick={() => navigate("/shop-list/create")}
      >
        Create a new list
      </button>
      {shopList.length ? (
        <ul className="w-full">
          {shopList.map((item) => (
            <li
              className="border border-black border-solid rounded p-3 m-2 w-full"
              key={item.id}
            >
              <span className="m-5">{item.title}</span>
              <button
                onClick={() => navigate(`/shop-list/${item.id}/edit`)}
                className="m-3"
              >
                <FaEdit />
              </button>
              <button  onClick={() => editShopListStatus(item.id)}   className={`m-3 ${item.status === 'COMPLETE' ? 'bg-green-500' : 'bg-blue-500'}`}>
                <FaCheckCircle />
              </button>
              <button onClick={() => deleteShopList(item.id)} className="m-3">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h2>You dont have any shop list</h2>
          <button
            className="border border-black border-solid rounded p-3 m-2"
            onClick={() => navigate("/shop-list/create")}
          >
            Create a new list
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopListItems;
