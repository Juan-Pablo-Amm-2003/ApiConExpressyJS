import axios from "axios";

// Configura la base URL para que apunte a tu backend
const API_URL = "http://localhost:3000/api/products";

const api = axios.create({
  baseURL: API_URL,
});

export const getAllProducts = () => api.get("/");
export const getProductById = (id) => api.get(`/${id}`);
export const createProduct = (product) => api.post("/", product);
export const updateProduct = (id, product) => api.put(`/${id}`, product);
export const deleteProduct = (id) => api.delete(`/${id}`);
