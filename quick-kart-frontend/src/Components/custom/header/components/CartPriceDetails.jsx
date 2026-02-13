import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const CartPriceDetails = () => {
    const { total } = useContext(CartContext)
Math.floor(total)
    // default values
    let discount = 0
    let platformFee = 0
    let finalAmount = 0

    if (total > 0) {
        // Discount logic only when total > 0
        discount = total > 1000 ? Math.floor(total * 0.10) : 100
        platformFee = total > 1000 ? 0 : 20
        finalAmount = total - discount + platformFee
    }

    return (
        <div className='p-4 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition'>
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-gray-500 font-medium text-lg'>PRICE DETAILS</p>
                    <hr className='border border-t my-2 border-gray-300' />
                </div>

                {/* Price */}
                <div>
                    <div className='flex items-center justify-between'>
                        <p className='font-medium'>Price</p>
                        <p className='font-medium text-gray-700'>₹{Math.floor(total)}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-medium'>Discount</p>
                        <p className={`font-medium ${discount > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                            -₹{discount}
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-medium'>Platform Fee</p>
                        <p className='font-medium text-gray-700'>₹{platformFee}</p>
                    </div>
                    <hr className='border border-dotted border-t my-2 border-gray-300' />
                </div>

                {/* Total */}
                <div>
                    <div className='flex items-center justify-between'>
                        <p className='font-bold text-lg'>Total Amount</p>
                        <p className='font-bold text-gray-800'>₹{Math.floor(finalAmount)}</p>
                    </div>
                    <hr className='border border-dotted border-t my-2 border-gray-300' />
                </div>

                {/* Savings */}
                <div>
                    {discount > 0 ? (
                        <p className='text-green-700 font-medium'>
                            You will save ₹{discount} on this order
                        </p>
                    ) : (
                        <p className='text-gray-500 text-sm'>
                            Add items to see your savings
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartPriceDetails
