import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Confetti from 'react-confetti';

import { BsBagCheck } from 'react-icons/bs';
import { useUserStore } from '../../hooks';
const Purchase = () => {
  const router = useRouter();
  const { uid } = useUserStore();
  return (
    <div className="min-h-screen bg-black animate__animated animate__fadeIn animate__faster">
      <Head>
        <title>Basement | Purchase Succesfully </title>
        <meta name="description" content="Congrats! Purchase succesfully" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <p className="text-gray-600 underline pl-4 pt-4 hover:text-gray-500">
          Back to Home
        </p>
      </Link>
      <Confetti className="w-full h-full" recycle={false} />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-16 bg-gray-900 rounded-xl shadow-md min-h-[25rem] lg:w-[65%] w-[90%] flex flex-col items-center justify-center p-4 space-y-6">
          <BsBagCheck className="text-gray-400" size="70px" />
          <h2 className="text-gray-200 text-3xl sm:text-4xl text-center">
            Thank you for your purchase
          </h2>
          <h3 className="text-gray-400 text-lg sm:text-2xl font-medium text-center">
            In the next few days you will receive your purchase, enjoy it!
          </h3>
          <button
            onClick={() => {
              router.replace(`/orders/${uid}`);
            }}
            className="bg-indigo-500 hover:bg-indigo-600 text-gray-300 px-8 py-2 rounded-md"
          >
            View my orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
