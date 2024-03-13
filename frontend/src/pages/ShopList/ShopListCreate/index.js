import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";

import { ihomeApi } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ShopListCreate = () => {
  const [listItem, setListItem] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const shopList = {
      description: data.description,
      title: data.title,
      shopListItems: listItem,
    };

    try {
      await ihomeApi.post("/shop-list", shopList, { withCredentials: true });
      navigate("/shop-list");
    } catch (error) {
      alert("Error to create new list", error.message);
    }
  };

  const addListItem = () => {
    const values = getValues();

    if (values.itemTitle && values.itemQuantity) {
      setListItem([
        ...listItem,
        { title: values.itemTitle, quantity: parseInt(values.itemQuantity) },
      ]);
      setValue("itemTitle", "");
      setValue("itemQuantity", "");
    }
  };

  const removeListItem = (item) => {
    const filterList = listItem.filter((_, index) => index !== item);
    setListItem(filterList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
          />
          {errors.title && (
            <span className="text-red-500">Title is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            className="border border-gray-300 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-500"
          />
          {errors.description && (
            <span className="text-red-500">Description is required</span>
          )}
        </div>
        <div className="my-2">
          <h2 className="m-2">Add an item to the list</h2>
          <div className="flex">
            <label
              htmlFor="itemTitle"
              className="block text-gray-700 font-bold mb-2 mx-3"
            >
              Item title:
            </label>
            <input
              type="text"
              id="itemTitle"
              {...register("itemTitle")}
              className="border border-gray-300 px-3 py-2 rounded w-96 focus:outline-none focus:border-blue-500"
            />

            <label
              htmlFor="itemQuantity"
              className="block text-gray-700 font-bold mb-2 mx-3"
            >
              Quantity:
            </label>
            <input
              type="number"
              min={0}
              id="itemQuantity"
              {...register("itemQuantity")}
              className="border border-gray-300 px-3 py-2 rounded w-12 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ms-auto bg-violet-500 text-white py-2 px-4 rounded hover:bg-blue-100 focus:outline-none"
              type="button"
              onClick={addListItem}
            >
              Add item
            </button>
          </div>
        </div>

        <ul className="border border-black border-solid rounded p-3 m-2">
          {listItem.map((item, index) => (
            <li key={index} className="flex">
              <>
                <span className="me-3">{item.title}</span>
                <span>{item.quantity}</span>
              </>
              <button
                type="button"
                className="ms-auto"
                onClick={() => removeListItem(index)}
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Create new List
        </button>
      </form>
    </div>
  );
};

export default ShopListCreate;
