import Link from 'next/link';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SummaryProduct } from './SummaryProduct';
import { saveCart } from '../../helpers';
import Checkout from '../../public/checkout.svg';
import YourCart from '../../public/YourCart.svg';
interface Props {
  isOpen: boolean;
  handleCart: () => void;
}

export const CartModal: FC<Props> = ({ handleCart, isOpen }) => {
  const { products, total } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    saveCart(products);
  }, [products]);

  return (
    <div
      className={
        isOpen
          ? 'fixed top-0 right-0 h-screen  md:w-[45vw] w-full bg-black  z-10 grid grid-cols-12 grid-rows-12 border-zinc-700 border-2 '
          : 'hidden'
      }
    >
      <button
        className="text-2xl text-white col-start-8 sm:col-start-10 col-end-13 font-semibold text-center "
        onClick={() => handleCart()}
      >
        CLOSE
      </button>
      <div className=" row-start-2 row-end-4 col-start-1 col-end-13  flex justify-center w-full mb-10 p-4">
        <Image src={YourCart} alt="Your Cart" height={100} />
      </div>
      <div className="product-wrapper row-start-3 row-end-11 col-start-1 col-end-13 py-4 px-3 grid grid-rows-3 gap-4 mt-12 ">
        {products.map(product => (
          <SummaryProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="row-start-11 row-end-13 col-start-1 col-end-13 grid grid-rows-2 py-3">
        <div className="flex justify-between items-center border-b-2 border-white mb-3">
          <h2 className="text-white text-3xl font-semibold px-2">Total:</h2>
          <h2 className="text-white text-3xl font-semibold px-2">${total}</h2>
        </div>
        <div className="w-full h-full flex items-start  justify-center   relative ">
          <Link href="/checkout">
            <Image src={Checkout} alt="checkout button" fill className="px-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
