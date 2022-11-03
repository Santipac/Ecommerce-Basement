import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductsMock } from './mock';
import Link from 'next/link';

export const ProductsSection = () => {
  const dispatch = useDispatch();

  return (
    <div className="min-h-min bg-black  grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-none gap-4 ">
      {ProductsMock.map(prod => (
        <Link href={`/products/${prod.id}`} key={prod.id}>
          <div className="card h-[50%] p-4 cursor-pointer">
            <Image
              src={prod.image}
              alt="Product"
              className="bg-gradient-to-b from-black to-zinc-800 border-b-4 border-white object-cover"
            />
            <div className="flex justify-between items-center pt-4">
              <h2 className="text-white font-semibold  text-2xl">
                {prod.title}
              </h2>
              <h2 className="text-white  font-semibold text-2xl">
                $ {prod.price}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
