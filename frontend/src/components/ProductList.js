import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/api";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data); // Ajusta esto según cómo recibas los datos
    } catch (error) {
      console.error("Error fetching products:", error);
      setAlert({ message: "Error fetching products", type: "error" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts(); // Refresca la lista de productos después de borrar uno
    } catch (error) {
      console.error("Error deleting product:", error);
      setAlert({ message: "Error deleting product", type: "error" });
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <Alert message={alert.message} type={alert.type} />
      <h1 className="text-2xl font-bold mb-3">Product List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/products/edit/${product.id}`}
                  className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
