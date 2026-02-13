import React, { useState } from "react";
import { SquarePlus, Logs, Archive } from "lucide-react";
import AddProducts from "./AddProducts";
import Orders from "./Orders";
import ProductList from "./ProductList";

const SellerMainPage = () => {
  const optionData = [
    {
      id: 1,
      Symbol: <SquarePlus className="w-5 h-5" />,
      text: "Add Products",
      page: <AddProducts />,
    },
    {
      id: 2,
      Symbol: <Logs className="w-5 h-5" />,
      text: "Products List",
      page: <ProductList />,
    },
    {
      id: 3,
      Symbol: <Archive className="w-5 h-5" />,
      text: "Orders",
      page: <Orders />,
    },
  ];

  const [sellerOption, setSellerOption] = useState(optionData[0]); // default first

  return (
    <div className="min-h-screen mt-[64px] flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-[18%] bg-white border-r border-gray-200 shadow-sm flex flex-col">
        <h2 className="text-lg font-semibold text-gray-700 px-4 py-5 border-b border-gray-200">
          Seller Dashboard
        </h2>
        <div className="flex flex-col gap-1 mt-2">
          {optionData.map((t) => (
            <div
              key={t.id}
              onClick={() => setSellerOption(t)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all 
                ${
                  sellerOption.id === t.id
                    ? "bg-red-500 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {t.Symbol}
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-white rounded-lg pr-5 shadow-sm min-h-[80vh]">
          {sellerOption.page}
        </div>
      </div>
    </div>
  );
};

export default SellerMainPage;
