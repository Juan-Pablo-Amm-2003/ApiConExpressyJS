import React from "react";

const Alert = ({ message, type }) => {
  if (!message) return null;

  const alertClasses = `p-4 mb-4 text-sm font-medium text-white ${type === "error" ? "bg-red-500" : "bg-green-500"} rounded-lg`;

  return <div className={alertClasses}>{message}</div>;
};

export default Alert;
