import React, { useState } from 'react'
import { Upload } from 'lucide-react'
const AddProducts = () => {

    const [category, setCategory] = useState("")

    return (
        <div className='min-h-screen border-l'>
            <div className='pl-7 pt-7 flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <div>
                        <p className='font-medium'>Product Image</p>
                    </div>
                    <div className='flex gap-3'>
                        <p className=' border bg-gray-200 px-6 py-3 rounded-sm border-dotted'><Upload /></p>
                        <p className=' border bg-gray-200 px-6 py-3 rounded-sm  border-dotted'><Upload /></p>
                        <p className=' border bg-gray-200 px-6 py-3 rounded-sm  border-dotted'><Upload /></p>
                        <p className=' border bg-gray-200 px-6 py-3 rounded-sm  border-dotted'><Upload /></p>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-medium'>Product</p>
                    <input
                        className='border rounded-sm px-2 py-2'
                        placeholder='Type here'
                        type="text" name="" id="" />
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-medium'>Product Description</p>
                    <textarea
                        className='border rounded-sm px-4 py-2'
                        placeholder='Type here'
                        rows={4}
                        type="text" name="" id="" />
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium'>Category</p>
                        <select
                            value={category}
                            className='border rounded-sm  px-2 py-2 font-medium'
                            onChange={(e) => setCategory(e.target.value)}
                            name="category" id="">
                            <option value="">Select</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Watch">Watch</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Camera">Camera</option>
                            <option value="Accessories">Accessories</option>

                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium'>Product Price</p>
                        <input
                            className='border rounded-sm  px-2 py-2 font-medium'
                            placeholder='0'
                            type="number" name="" id="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium'>Offer Price</p>
                        <input
                            className='border rounded-sm  px-2 py-2 font-medium'
                            placeholder='0'
                            type="number" name="" id="" />
                    </div>
                </div>
                <div>
                    <button className='bg-red-500 font-bold text-white rounded-sm px-6 py-2'>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddProducts