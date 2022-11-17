import { DocumentData } from 'firebase/firestore/lite';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DropdownMenu } from '../../components/ui';
import { getOrdersFromFirestore } from '../../helpers/getOrdersFromFirestore';
import { useCartStore, useUserStore } from '../../hooks';

const MyOrdersPage: NextPage = () => {
  const [orders, setOrders] = useState<DocumentData[]>([]);
  const { uid } = useUserStore();
  useEffect(() => {
    const getOrders = async () => {
      const ordersFromFirestore = await getOrdersFromFirestore(uid!);
      setOrders(ordersFromFirestore);
    };
    getOrders();
  }, []);

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="p-4 h-full w-full">
        <header className="w-full flex justify-between px-10">
          <h2 className="text-gray-400 font semi-bold py-4 text-3xl">
            My Orders
          </h2>
          <DropdownMenu />
        </header>
        <div className="grid auto-rows-[min-h-[5rem]] justify-items-center gap-4">
          {orders.map(order => (
            <div
              className="bg-gray-900 w-full  rounded-md flex flex-col justify-between p-4 sm:w-[70%] lg:w-[50%] space-y-4"
              key={order.id}
            >
              <div className="flex w-full justify-between items-center">
                <h4 className="text-gray-500 font-medium text-md sm:text-lg md:text-xl lg:text-2xl">
                  OrderId:{' '}
                  <span className="text-indigo-400 text-sm sm:text-md md:text-lg lg:text-xl">
                    {order.id.slice(0, 8)}
                  </span>
                </h4>
                <h4 className="text-gray-500 font-medium text-md sm:text-lg md:text-xl lg:text-2xl">
                  Total:{' '}
                  <span className="text-indigo-400 text-sm sm:text-md md:text-lg lg:text-xl">
                    ${order.totalPaid}
                  </span>
                </h4>
              </div>
              <div className="flex w-full justify-between items-center">
                <h4 className="text-gray-500 font-medium text-md sm:text-lg md:text-xl lg:text-2xl">
                  Ordered:{' '}
                  <span className="text-indigo-400 text-sm sm:text-md md:text-lg lg:text-xl">
                    {new Date(order.createdAt.seconds * 1000)
                      .toLocaleString()
                      .slice(0, 10)}
                  </span>
                </h4>
                <button className="bg-indigo-600 text-white font-medium px-4 py-1.5 text-sm rounded-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
