'use client'
import React, { useEffect, useState } from 'react';
// import CardData from './carddata';
import useDonateMoney from '@/hooks/useDonateMoney';

const UserDonateMoney = () => {
    const [categories]=useDonateMoney()
    const total = categories.reduce((sum, item) => sum + item.price, 0);

    return (
         <div className=" mt-40">


        <div className="w-3/4 mx-auto">
        <h1>Your Total Donate Money For Human: ${total}</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="py-2 text-xs md:text-base ">SI No</th>
                        <th className="py-2 text-xs md:text-base  text-left">User Email</th>
                        <th className="py-2 text-xs md:text-base  text-left">TransactionId</th>
                        <th className="py-2 text-xs md:text-base  text-left">Donate Money</th>
                        <th className="py-2 text-xs md:text-base ">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={item._id} className="border-b border-gray-200">
                            <td className="py-3 text-center text-xs md:text-base">{index + 1}</td>
                          
                            <td className="py-3 text-xs md:text-base ">{item.email}</td>
                            <td className="py-3 text-xs md:text-base">{item.transactionId}</td>
                            <td className="py-3 text-xs md:text-base text-left">${item.price}</td>
                            <td className="py-3 text-xs md:text-base text-left">{item.date}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default UserDonateMoney;