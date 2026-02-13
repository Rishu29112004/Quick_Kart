import React, { useContext, useEffect, useState } from "react"
import { products } from "../../custom/data/data"
import { Circle } from 'lucide-react'
import Header from "../../custom/header/Header"
import { CartContext } from "../../context/CartContext"
const slideData = [
    {
        "id": 1,
        "offer": "Limited Time Offer 30% Off",
        "product": "Experience Pure Sound - Your Perfect Headphones Awaits",
        "image": ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/e3zjaupyumdkladmytke.webp"]
    },
    {
        "id": 2,
        "offer": "Hurry up only few lefts!",
        "product": "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
        "image": ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/dd3l13vfoartrgbvkkh5.webp"]
    },
    {
        "id": 3,
        "offer": "Exclusive Deal 40% Off",
        "product": "Power Meets Elegance - Apple MacBook Pro is Here for you!",
        "image": ["https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/rzri7kytphxalrm9rubd.webp"]
    }
]

const photos = [
    {
        id: 1,
        image: "https://media.gettyimages.com/id/1168002788/photo/directly-below-shot-of-female-athlete-with-curly-hair-against-clear-sky.jpg?s=612x612&w=gi&k=20&c=rK4QLYax4PIY-Xhe6CvOiHML_oPRZrQ1stbyzNqdX3Y=",
        product: "Unparalleled Sound",
        dis: "Experience crystal-clear audio with premium headphones."
    },
    {
        id: 2,
        image: "https://www.yourtango.com/sites/default/files/image_blog/2025-08/people-over-forty-think-gen-z-odd-doing-these-everyday-things.png",
        product: "Stay Connected",
        dis: "Compact and stylish earphones for every occasion."
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHZN_R9zDoyWOvWbAsTI5ovNwv5MVryyCkQ&s",
        product: "Power in Every Pixel",
        dis: "Shop the latest laptops for work,gaming,and more."
    }
]


// 🔹 Main Home Component
const Home = () => {
    const {addToCart,cartitem,removeFromCart} =useContext(CartContext)
    const [currentIndex, setCurrentIndex] = useState(0)
   

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => prev === slideData.length - 1 ? 0 : prev + 1)
        }, 3000);
        return () => clearInterval(intervalId)
    }, [])



    return (
        <div className="min-h-screen mt-[85px] max-w-7xl mx-auto mb-10 ">

            <div className="mt-10">

                <div className="flex bg-gray-200 rounded-2xl items-center justify-between px-5 py-5">
                    <div className="w-[50%] pl-10 flex flex-col gap-2">
                        <p className="text-red-500 font-medium">{slideData[currentIndex].offer}</p>
                        <p className="text-3xl font-bold">{slideData[currentIndex].product}</p>
                        <div className="flex gap-3">
                            <button className="rounded-full bg-orange-500 text-white font-bold px-4 py-2">Order Now</button>
                            <button className="font-medium">Explore More</button>
                        </div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center">
                        <img src={slideData[currentIndex].image} className="h-70 w-70" alt="" />
                    </div>
                </div>
                {/* <div className="flex gap-2 justify-center mt-2"> */}
                {/* {
                        Array.from({ length: slideData.length }).map((_, index) => (
                            <div
                                key={index}
                                className={`rounded-full flex gap-2 h-3 w-3  items-center justify-center 
        ${currentIndex === index ? 'bg-orange-500' : 'bg-gray-400'}`}
                            >
                            </div>
                        ))
                    } */}
                <div className="flex justify-center gap-2 mt-2">
                    <p><Circle stroke="none" className={`h-3 w-3 rounded-full ${currentIndex === 0 ? "bg-orange-500" : "bg-gray-300"}`} /></p>
                    <p><Circle stroke="none" className={`h-3 w-3 rounded-full ${currentIndex === 1 ? "bg-orange-500" : "bg-gray-300"}`} /></p>
                    <p><Circle stroke="none" className={`h-3 w-3 rounded-full ${currentIndex === 2 ? "bg-orange-500" : "bg-gray-300"}`} /></p>
                </div>

                {/* </div> */}
            </div>
            {/* Header */}
            <div className="py-6">
                <p className="text-2xl font-bold">All Products</p>
                <hr className="h-1 w-24 bg-orange-500 border-0 mt-1" />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer ">
                {products.map((product, index) => (
                    <div key={product._id} className="p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition duration-200 bg-white">
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
                                <p className="text-sm line-through text-gray-400">${product.price}</p>
                            </div>
                            <button onClick={()=>addToCart(product)} className="px-3 py-1 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm">
                              Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="border px-4 py-2 text-gray-500 border-gray-300 mt-5">See More</button>
            </div>
            <div className="flex flex-col items-center justify-center my-7">
                <p className="font-bold text-2xl">Featured Products</p>
                <hr className="border border-t my-1 w-[10%] text-orange-500" />
            </div>
            <div className="flex gap-10 mt-5">
                {photos.map((t, index) => (
                    <div key={t.id} className="relative rounded-2xl overflow-hidden">
                        <img src={t.image} className="h-100 w-100" alt="" />
                        <div className="absolute inset-0 flex gap-3 flex-col z-40 items-start bg-black/40 justify-end pb-5 px-5">
                            <p className="text-white font-bold text-2xl">{t.product}</p>
                            <p className="font-bold text-white">{t.dis}</p>
                            <button className="text-white bg-orange-500 rounded-sm px-4 py-2">Buy now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" mt-10 relative rounded-2xl overflow-hidden">
                <img src="https://t3.ftcdn.net/jpg/06/25/67/54/360_F_625675441_XS9YB6pi8L1cIoXU5mxYZoMQJoUVOYgK.jpg" className="w-full h-80" alt="" />
                <div className="absolute z-40 inset-0 bg-black/50 flex flex-col gap-3 items-center justify-center">
                    <p className="font-bold text-3xl text-white">Level Up Your Gaming Experience</p>
                    <p className="font-bold text-gray-300">From immersive sound to precise controls - everything you nees to win</p>
                    <button className="text-white bg-orange-500 rounded-sm px-4 py-2">Buy now</button>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
                <p className="font-bold text-gray-800 text-3xl">Subscribe now & get 20% off</p>
                <p className="font-medium text-gray-500">Lorem lpsum is simple dummy text od the printing and typesetting industry.</p>
                <div className="pl-3">
                    <input
                        
                        className="border border-gray-500 py-2 px-2 rounded-l-md"
                        placeholder="Enter your email id"
                        type="text" />
                    <button  className="text-white border  border-gray-500 bg-orange-500 rounded-r-md px-4 py-2">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Home
