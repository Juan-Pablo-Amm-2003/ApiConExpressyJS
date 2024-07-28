import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center border-t border-gray-300">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
