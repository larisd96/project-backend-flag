import { useParams, useNavigate } from "react-router-dom";
import { ihomeApi } from "../../../api";
import { useState, useEffect } from "react";
import { FaCaretLeft } from "react-icons/fa";

const ShopListDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listItem, setListItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShopList = async (id) => {
      const result = await ihomeApi.get(`/shop-list/${id}`, {
        withCredentials: true,
      });

      setListItem(result.data);
      setLoading(false);
    };
    if (id) {
      getShopList(id);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="flex-col m-2">
          <div className="flex">
            <div className="me-auto">
              <h2 className="text-3xl">{listItem.title}</h2>
              <h3 className="text-2xl">{listItem.description}</h3>
            </div>
            <div className="flex-col">
              <button
                onClick={() => navigate("/shop-list")}
                className="flex ms-auto mb-2 items-center bg-green-700 text-white py-1 px-4 rounded"
              >
                {" "}
                <FaCaretLeft /> Back
              </button>
              <h3 className="text-xl ms-auto">{`Status: ${listItem.status}`}</h3>
            </div>
          </div>

          <ul className="flex-col m-3">
            <li className="flex mb-3 p-1 border-b-2 border-gray-500">
              <span className="text-xl">Title</span>
              <span className="text-xl ms-auto">Quantity</span>
            </li>
            {listItem.shopListItems.map((item) => (
              <li key={item.id} className="flex border-b-2 p-2 border-gray-300">
                <span>{item.title}</span>
                <span className="ms-auto">{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShopListDetail;
