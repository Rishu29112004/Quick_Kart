import React, { useContext } from 'react'
import { Minus, Plus } from 'lucide-react'
import { CartContext } from '../../../context/CartContext'
import CartPriceDetails from './CartPriceDetails'

const CartPage = () => {
  // Context se sab values lo
  const { cartItem, removeFromCart, increment, decrement } = useContext(CartContext)

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className='flex justify-between'>
        <div className="grid border w-[75%] border-gray-300 p-3 rounded-md gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cartItem.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              {/* Product Image */}
              <img
                src={product?.image?.[0] || "/placeholder.png"}
                alt={product.name}
                className="w-28 h-28 object-contain bg-gray-100 rounded-md mb-4"
              />

              {/* Product Info */}
              <div className="text-center space-y-1">
                <p className="font-semibold text-gray-800 truncate">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-bold text-orange-600">${product.price}</p>
              </div>

              {/* Quantity + Remove */}
              <div className="flex items-center justify-between gap-10 py-2 w-full mt-3">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => decrement(product._id)}
                    className="border rounded p-1 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <p className="text-orange-500 font-bold">{product.quantity}</p>
                  <button
                    onClick={() => increment(product._id)}
                    className="border rounded p-1 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="py-1 px-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='pl-2 w-[25%]'>
          <CartPriceDetails />
        </div>
      </div>
    </div>
  )
}

export default CartPage
