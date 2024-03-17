import { useNavigate } from "react-router-dom";
import { FaEdit, FaFileAlt, FaCheckCircle, FaTrash } from "react-icons/fa";
import { ihomeApi } from "../../../api";
import { useState } from "react";

const ShopListItems = ({ items }) => {
  const [shopList, setShopList] = useState(items);

  const navigate = useNavigate();

  const editShopListStatus = async (id) => {

    try {
      const list = shopList.find(item => item.id === id)

      await ihomeApi.put(
        `/shop-list/${id}`,
        { status: list.status === "COMPLETE" ? "IN_PROGRESS" : "COMPLETE"},
        { withCredentials: true }
      );

      const updatedShopList = shopList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: item.status === "COMPLETE" ? "IN_PROGRESS" : "COMPLETE"
          };
        }
        return item;
      });
      
      setShopList(updatedShopList);
    } catch (error) {
      alert("Failed to change the status");
    }
  };

  const deleteShopList = async (id) => {
    try {
      await ihomeApi.delete(`/shop-list/${id}`, { withCredentials: true });

      setShopList(shopList.filter((item) => item.id !== id));
    } catch (error) {
      alert("Failed to delete shop list.");
    }
  };

  return (
    <div className="flex flex-box justify-between w-full">
      {shopList.length ? (
        <div className="flex w-full">
          <ul className="w-full me-4">
            {shopList.map((item) => (
              <li
                className="flex border border-black border-solid rounded p-3 m-2 w-full"
                key={item.id}
              >
                <span className="flex-1 p-2">{item.title}</span>
                <button
                  onClick={() => navigate(`/shop-list/${item.id}`)}
                  className="m3"
                >
                  <FaFileAlt className="size-5 text-blue-500" />
                </button>

                <button
                  onClick={() => navigate(`/shop-list/${item.id}/edit`)}
                  className="m-3"
                >
                  <FaEdit className="size-5" />
                </button>
                <button onClick={() => editShopListStatus(item.id)}>
                  <FaCheckCircle
                    className={`size-5 ${
                      item.status === "COMPLETE"
                        ? "text-green-600"
                        : "text-gray-300"
                    }`}
                  />
                </button>
                <button onClick={() => deleteShopList(item.id)} className="m-3">
                  <FaTrash className="size-5 text-red-400" />
                </button>
              </li>
            ))}
          </ul>
          <button
            className="text-center border border-black border-solid rounded p-3 m-2 w-28 h-20 bg-blue-500 text-white"
            onClick={() => navigate("/shop-list/create")}
          >
            Create a new list
          </button>
        </div>
      ) : (
        <div className="flex flex-col m-auto">
          <h2>You dont have any shop list</h2>
          <button
            className="border border-black border-solid rounded p-3 m-2 bg-blue-700"
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
