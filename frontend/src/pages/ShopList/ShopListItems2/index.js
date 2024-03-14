import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const ShopListItems2 = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-box justify-between">
                  <button className="border border-black border-solid rounded p-3 m-2" onClick={() => navigate("/shop-list/create")}>
            Create a new list
          </button>
      {items.length ? (
        <ul className="w-full">
          {items.map((item) => (
            <li className="border border-black border-solid rounded p-3 m-2 w-full" key={item.id}>
            <span className="m-5">{item.title}</span>
            <button onClick={() => navigate(`/shop-list/${item.id}/edit`)} className="m-3"><FaEdit/></button>
            <button className="m-3"><FaCheckCircle/></button>
            <button className="m-3"><FaTrash/></button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h2>You dont have any shop list</h2>
          <button className="border border-black border-solid rounded p-3 m-2"onClick={() => navigate("/shop-list/create")}>
            Create a new list
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopListItems2;
