import Image from 'next/image';
import React, { FC, useState } from 'react';
import YourCart from '../../public/YourCart.svg';
import remera from '../../public/products/shirt.png';

interface Props {
  isOpen: boolean;
  onOpen: () => void;
}

export const CartModal: FC<Props> = ({ isOpen, onOpen }) => {
  const [counter, setCounter] = useState<number>(1);
  return (
    <div
      className={
        isOpen
          ? `absolute top-0 right-0 h-[40rem] w-[45rem] bg-black border-l-2 border-b-2 border-white grid auto-rows-min z-30 gap-4 p-4`
          : `hidden`
      }
    >
      <div className="flex w-full min-h-min items-start justify-end pr-4">
        <button
          onClick={() => onOpen()}
          className="text-white text-4xl font-semibold"
        >
          → Close
        </button>
      </div>
      <div className="w-full text-center p-4">
        <Image
          src={YourCart}
          alt="Your Cart Image"
          className="w-full min-h-min"
        />
      </div>
      <div className="grid grid-cols-10 border border-white w-full p-4">
        <div className=" bg-gradient-to-b from-black to-zinc-800 col-span-4 flex justify-center">
          <Image
            src={remera}
            height={150}
            width={150}
            alt="Product Cart"
            className="object-cover"
          />
        </div>
        <div className="col-span-6 pl-4">
          <h2 className="text-4xl text-white font-bold">Black t-shirt</h2>
          <h2 className="text-xl text-gray-400 font-bold">
            Unisex Basic Softstyle T-Shirt
          </h2>
          <div className="pt-16 flex items-center">
            <h3 className="pr-4 text-white font-bold text-2xl">Quantity:</h3>
            <div className="flex items-center  bg-black text-white border border-white rounded-full space-x-2">
              <button
                className="px-2 text-center"
                onClick={() => setCounter(counter - 1)}
              >
                <p className="text-3xl">-</p>
              </button>
              <p className="text-2xl">{counter}</p>
              <button
                className="px-2 text-center "
                onClick={() => setCounter(counter + 1)}
              >
                <p className="text-3xl">+</p>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between items-end mt-4">
            <div className="flex items-center space-x-2 ">
              <h2 className="text-white text-2xl font-bold">Size:</h2>
              <button className="text-white py-1 px-2 text-lg">S</button>
              <button className="text-white py-1 px-2 text-lg">M</button>
              <button className="text-white py-1 px-2 text-lg">L</button>
              <button className="text-white py-1 px-2 text-lg">XL</button>
            </div>
            <h2 className="text-white text-3xl font-bold p-0 m-0 text-end">
              $12.95
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
