import React, { useState, useEffect } from "react";
import { createProduct, updateProduct, getProductById } from "../services/api";
import Alert from "./Alert";
import { useParams, useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await getProductById(id);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching product:", error);
          setAlert({ message: "Error fetching product", type: "error" });
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateProduct(id, product);
        setAlert({ message: "Product updated successfully!", type: "success" });
      } else {
        await createProduct(product);
        setAlert({ message: "Product created successfully!", type: "success" });
      }
      navigate("/products");
    } catch (error) {
      console.error("Error saving product:", error);
      setAlert({
        message: error.response?.data?.message || "An error occurred",
        type: "error",
      });
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-3">
        {id ? "Edit Product" : "Add Product"}
      </h1>
      <Alert message={alert.message} type={alert.type} />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category ID</label>
          <input
            type="number"
            name="category_id"
            value={product.category_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
