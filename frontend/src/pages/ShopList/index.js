import { useEffect, useState } from "react";
import { ihomeApi } from "../../api";
import ShopListItems from "./ShopListItems";

const ShopList = () => {
  const [shopLists, setShopList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShopList = async () => {
    setLoading(true);
      const results = await ihomeApi.get("/shop-list", { withCredentials: true });
      setShopList(results.data);
      setLoading(false);
    };
    getShopList();
  }, []);


  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mt-2">Shop Lists</h2>
      {
        loading ? <div>Loading lists...</div> :
        <ShopListItems items={shopLists}/>
      }
    </div>
  );
};

export default ShopList;
