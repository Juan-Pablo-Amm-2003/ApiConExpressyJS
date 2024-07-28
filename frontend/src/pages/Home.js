import React from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-5">
        <header className="text-center mb-8">
          <img
            src={placeholderImage}
            alt="Product Management"
            className="mx-auto mb-4 w-1/2 md:w-1/3"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido a tu Sistema de Gestión de Productos
          </h1>
          <p className="text-lg text-gray-600">
            Administra tus productos de manera eficiente y sencilla con nuestra
            plataforma. Utiliza las opciones a continuación para gestionar tu
            inventario.
          </p>
        </header>
        <div className="flex justify-center space-x-4 mb-8">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Link to="/products" className="text-white">
              Ver Productos
            </Link>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Link to="/products/add" className="text-white">
              Agregar Producto
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
