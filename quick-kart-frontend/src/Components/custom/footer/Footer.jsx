import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white border-b border-gray-300  flex flex-col items-center justify-between px-4 md:px-10 max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 text-gray-700 py-1'>
                <div className=''>
                    <p className='font-bold text-black text-2xl'><span className='text-orange-500'>Q</span>uickCart</p>
                    <p className='pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-lg text-black font-medium'>Company</p>
                    <p  className='pt-2'>Home</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Privacy policy</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-lg text-black font-medium'>Get it touch</p>
                    <p  className='pt-2'>+1-234-567-890</p>
                    <p>contact@greaatstack.dev</p>
                </div>
            </div>
           
                 <hr className='border-t my-4 border-gray-300 w-full' />
            <div className=''>
                <p className='text-gray-700 mb-2 font-semibold'>Copyright 2025 © GreatStack.dev All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer