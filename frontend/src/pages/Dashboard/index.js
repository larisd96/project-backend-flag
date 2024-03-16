import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ihomeApi } from "../../api";

const Home = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getShopList = async () => {
      const result = await ihomeApi.get("/shop-list", {
        withCredentials: true,
      });

      setList(result.data);
      setLoading(false);
    };

    getShopList();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mb-8">
        {" "}
        WELCOME to iHOME
      </h1>
      <h2 className="text-center text-xl">
        - Organize your home supermarket shopping with these helpful lists.
      </h2>

      {loading ? (
        <span>Loading lists...</span>
      ) : (
        <>
          {list.length ? (
            <div className="flex flex-col mt-8">
              <h2 className="text-lg font-bold">Last Shop List:</h2>
              <div>
                <h2 className="font-bold mx-2">{list[0].title}</h2>
                <h2 className="font-bold mx-2 mb-2">{list[0].description}</h2>
                <button
                  onClick={() => navigate(`/shop-list/${list[0].id}`)}
                  className="bg-blue-400 rounded py-1 px-2 text-white"
                >
                  Go to the list
                </button>
              </div>
            </div>
          ) : (
            <>
            <h2 className="mt-3 text-xl text-cyan-700 font-bold">You don't have any list yet</h2>
            <h2 className="mt-3 text-lg text-cyan-700 font-bold">Create one</h2>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
