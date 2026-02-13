import React, { useContext, useEffect, useRef } from "react";
import { products } from "../../custom/data/data";
import { CartContext } from "../../context/CartContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  
  return (
    <div  className="min-h-screen max-w-7xl mx-auto py-5">
      {/* Heading */}
      <div className="py-6">
        <p className="text-2xl text-gray-700 font-bold">All Products</p>
        <hr className="h-1 ml-10 w-24 bg-orange-500 border-0 mt-1" />
      </div>

      {/* Products Grid */}
      <div className="grid py-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.map((product) => (
          <div
            key={product._id}
            className="p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-200 bg-white"
          >
            {/* Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden h-40">
              <img
                src={product.image[0]}
                alt={product.name}
                className="object-contain h-full"
              />
            </div>

            {/* Name */}
            <p className="font-semibold mt-3 line-clamp-1">{product.name}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm line-clamp-2 mt-1">
              {product.description}
            </p>

            {/* Price + Button */}
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="text-lg font-bold text-gray-800">
                  ${product.offerPrice}
                </p>
                <p className="text-sm line-through text-gray-400">
                  ${product.price}
                </p>
              </div>
              <button
                onClick={() => addToCart(product)} // ✅ Fixed here
                className="px-3 py-1 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm"
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
