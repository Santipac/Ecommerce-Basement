import Image from 'next/image';
import { FC } from 'react';
import YourCart from '../../public/YourCart.svg';
import Checkout from '../../public/checkout.svg';
import Hoodie from '../../public/products/hoodie.png';
interface Props {
  isOpen: boolean;
  handleCart: () => void;
}

export const CartModal: FC<Props> = ({ handleCart, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? 'fixed top-0 left-0 h-screen w-full bg-black p-4 z-10 grid grid-cols-12 grid-rows-12'
          : 'hidden'
      }
    >
      <button
        className="text-2xl text-white col-start-10 col-end-13 font-semibold text-end"
        onClick={() => handleCart()}
      >
        CLOSE
      </button>
      <div className=" row-start-2 row-end-4 col-start-1 col-end-13 pt-3">
        <Image src={YourCart} alt="Your Cart" className="w-full" />
      </div>
      <div className="product-wrapper row-start-3 row-end-11 col-start-1 col-end-13 py-4 px-2 grid grid-rows-3 gap-4">
        <div className="border-white border-2 w-full h-full grid grid-cols-12 p-2">
          <Image
            src={Hoodie}
            alt="Cart Product"
            className="col-start-1 col-end-4 bg-gradient-to-b from-black to-zinc-800"
          />
          <div className="flex flex-col col-start-4 col-end-13 pl-2">
            <h2 className="text-white font-semibold text-xl">Black Hoodie</h2>
            <h2 className="text-gray-600 font-semibold text-md">
              Unisex Basic Softstyle Hoodie
            </h2>
            <div className="flex items-center justify-between h-full mt-6">
              <div className="flex items-center">
                <h2 className="text-white text-lg font-semibold">Quantity:</h2>
                <button className="text-white text-lg px-2">+1</button>
              </div>
              <h2 className="text-white font-semibold text-xl">$12.50</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-11 row-end-13 col-start-1 col-end-13  grid grid-rows-2">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-3xl font-semibold">Total:</h2>
          <h2 className="text-white text-3xl font-semibold">$0</h2>
        </div>
        <div className="w-full h-full flex items-center justify-center border-t-2 border-white ">
          <button className="mt-2">
            <Image src={Checkout} alt="checkout button" />
          </button>
        </div>
      </div>
    </div>
  );
};
