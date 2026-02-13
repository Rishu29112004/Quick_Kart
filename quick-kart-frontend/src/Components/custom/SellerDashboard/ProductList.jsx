import React from 'react'
import { products } from '../data/data'
import { SquareMousePointer } from 'lucide-react'
const ProductList = () => {
    return (
        <div className='min-h-screen border-l border-gray-300'>
            <div className='pl-7 pt-7'>
                <div className='py-4 text-gray-900'>
                    <p className='font-medium text-2xl'>All Product</p>
                </div>

                <div className='flex flex-col py-3 gap-3 border  border-gray-300 rounded-l-sm'>
                    <div className='flex items-center justify-between px-3 font-medium'>
                        <p className='w-[40%]'>Product</p>
                        <p className='w-[20%]'>Category</p>
                        <p className='w-[20%]'>Price</p>
                        <p className='w-[20%]'>Action</p>
                    </div>

                    {products.map((t) => (
                        <div key={t._id} className='flex flex-col'>
                            <hr className='border border-gray-300 w-full' />
                            <div className='flex items-center justify-between px-3 py-2'>
                                <div className='flex items-center gap-2 w-[40%]'>
                                    <img src={t.image[0]} className='h-16 w-16 bg-gray-200 rounded-sm' alt="" />
                                    <p>{t.name}</p>
                                </div>
                                <p className='w-[20%]'>{t.category}</p>
                                <p className='w-[20%]'>${t.price}</p>
                                <div className='w-[20%]'>
                                    <button className='flex px-2 py-1 rounded-sm items-center gap-1 text-white bg-red-500 font-medium'>
                                        Visit <SquareMousePointer className='h-4 w-4' />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductList