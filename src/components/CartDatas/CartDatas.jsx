'use client'

import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const CartDatas = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {user}=useAuth()

    const cartData = useCart();

    if (!Array.isArray(cartData)) {
        return <div>No items in the cart</div>;
    }

    const total = cartData.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const handlePayment = async () => {
        const money = parseFloat(total).toFixed(2);
        console.log( money);
        try {
            const { data } = await axios.post("/api/storepayments/payment", {
                price: money,
                email: user.email,
            });
            window.location.href = data.url;
        } catch (error) {
            toast.error("Something went wrong!");
            console.log(error);
            setIsLoading(false);
        }
    };



    return (
        <div className=" mt-40">
            <div className="flex justify-around items-center mb-20 mx-5 md:mx-14">
                <h2 className="text-center font-bold rounded-lg dark:bg-black bg-green-300 px-5 py-2">Total Items: {cartData.length}</h2>
                <h2 className="text-center font-bold rounded-lg dark:bg-black bg-green-300 px-5 py-2">Due: ${total}</h2>
                <button onClick={handlePayment} className="rounded-lg bg-green-300 px-5 dark:bg-black py-2 font-bold">Checkout</button>
            </div>


            <div className="w-3/4 mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="py-2 text-xs md:text-base ">SI No</th>
                            <th className="py-2 text-xs md:text-base  text-left hidden md:block">Image</th>
                            <th className="py-2 text-xs md:text-base  text-left">Item Name</th>
                            <th className="py-2 text-xs md:text-base  text-left">Category</th>
                            <th className="py-2 text-xs md:text-base  text-left">Price</th>
                            <th className="py-2 text-xs md:text-base ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartData.map((item, index) => (
                            <tr key={item._id} className="border-b border-gray-200">
                                <td className="py-3 text-center text-xs md:text-base">{index + 1}</td>
                                <td className="py-3 hidden md:block">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={item.itemImg}
                                        alt="Food"
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 text-xs md:text-base ">{item.name}</td>
                                <td className="py-3 text-xs md:text-base">{item.category}</td>
                                <td className="py-3 text-xs md:text-base text-left">${item.price}</td>
                                <td className="py-3 text-center">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost text-xl bg-lime-500 text-white"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>











        </div>
    );
};

export default CartDatas;









