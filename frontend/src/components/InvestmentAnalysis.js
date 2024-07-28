import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import Alert from "./Alert";

const InvestmentAnalysis = () => {
  const [, setProducts] = useState([]);
  const [investmentByCategory, setInvestmentByCategory] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        const products = response.data;
        setProducts(products);

        // Calculate investment by category
        const investment = products.reduce((acc, product) => {
          const investment = product.price * product.stock;
          if (!acc[product.category_id]) {
            acc[product.category_id] = {
              totalInvestment: 0,
              category: product.category_id,
            };
          }
          acc[product.category_id].totalInvestment += investment;
          return acc;
        }, {});

        setInvestmentByCategory(investment);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAlert({ message: "Error fetching products", type: "error" });
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <Alert message={alert.message} type={alert.type} />
      <h1 className="text-2xl font-bold mb-3">
        Investment Analysis by Category
      </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Category ID</th>
            <th className="py-2 px-4 border-b">Total Investment</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(investmentByCategory).map((data) => (
            <tr key={data.category}>
              <td className="py-2 px-4 border-b">{data.category}</td>
              <td className="py-2 px-4 border-b">
                ${data.totalInvestment.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentAnalysis;
