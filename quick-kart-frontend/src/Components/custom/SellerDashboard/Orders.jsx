import React from 'react'
import { ordersData } from '../data/data'
import { Package } from 'lucide-react'

const Orders = () => {
  return (
    <div className="min-h-screen border-l">
      <div className="pl-7 pt-7">
        <div className="py-4 text-gray-900">
          <p className="font-medium text-2xl">Orders</p>
        </div>

        <div className="flex flex-col py-3 gap-3 border border-gray-300 rounded-sm">
          {ordersData.map(({ id, productName, items, customerName, address, phone, amount, method, date, payment }) => (
            <div key={id} className="flex flex-col">
              <div className="flex items-center justify-between px-4 py-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-2">
                  <Package className="border rounded-sm h-12 w-12 bg-red-100 text-red-500 p-2" />
                  <div>
                    <p>{productName}</p>
                    <p>Items: {items}</p>
                  </div>
                </div>

                {/* Customer Info */}
                <div>
                  <p>{customerName}</p>
                  <p>{address}</p>
                  <p>{phone}</p>
                </div>

                {/* Amount */}
                <div>
                  <p>${amount}</p>
                </div>

                {/* Order Details */}
                <div>
                  <p>Method: {method}</p>
                  <p>Date: {date}</p>
                  <p>Payment: {payment}</p>
                </div>
              </div>

              <hr className="border border-gray-200 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders
