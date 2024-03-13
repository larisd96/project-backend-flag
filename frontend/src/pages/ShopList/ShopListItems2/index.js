import { useNavigate } from "react-router-dom";

const ShopListItems2 = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div>
                  <button onClick={() => navigate("/shop-list/create")}>
            Create a new list
          </button>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <div key={item.id}>
            <li>{item.title}</li>
            <li>{ item.description }</li>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <h2>You dont have any shop list</h2>
          <button onClick={() => navigate("/shop-list/create")}>
            Create a new list
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopListItems2;
