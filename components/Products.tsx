import Image from 'next/image';
import React from 'react';
import Remera from '../public/products/shirt.png';
import Buzo from '../public/products/hoodie.png';
import Gorra from '../public/products/cap.png';
export const Products = () => {
  return (
    <div className="min-h-min bg-black  grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-none gap-4 ">
      <div className="card h-[50%] p-4">
        <Image
          src={Remera}
          alt="Product"
          className="bg-gradient-to-b from-black to-zinc-900 border-b-4 border-white object-cover"
        />
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-white font-semibold  text-2xl">Black t-shirt</h2>
          <h2 className="text-white  font-semibold text-2xl">$7.92</h2>
        </div>
      </div>
      <div className="card h-[50%] p-4">
        <Image
          src={Gorra}
          alt="Product"
          className="bg-gradient-to-b from-black to-zinc-900 border-b-4 border-white object-cover"
        />
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-white  font-semibold text-2xl">Black cap</h2>
          <h2 className="text-white  font-semibold text-2xl">$23</h2>
        </div>
      </div>
      <div className="card h-[50%] p-4">
        <Image
          src={Buzo}
          alt="Product"
          className="bg-gradient-to-b from-black to-zinc-900 border-b-4 border-white object-cover"
        />
        <div className="flex justify-between items-center pt-4">
          <h2 className="text-white font-semibold  text-2xl">Black Hoodie</h2>
          <h2 className="text-white  font-semibold text-2xl">$13</h2>
        </div>
      </div>
    </div>
  );
};
