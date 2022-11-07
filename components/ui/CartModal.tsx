import Image from 'next/image';
import { FC } from 'react';
import YourCart from '../../public/YourCart.svg';
import Checkout from '../../public/checkout.svg';
import Hoodie from '../../public/products/hoodie.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SummaryProduct } from './SummaryProduct';
interface Props {
  isOpen: boolean;
  handleCart: () => void;
}

export const CartModal: FC<Props> = ({ handleCart, isOpen }) => {
  const { products, total } = useSelector((state: RootState) => state.cart);

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
      <div className=" row-start-2 row-end-4 col-start-1 col-end-13 pt-3 flex justify-center w-full mb-10">
        <Image src={YourCart} alt="Your Cart" height={100} />
      </div>
      <div className="product-wrapper row-start-3 row-end-11 col-start-1 col-end-13 py-4 px-2 grid grid-rows-3 gap-4 mt-12 ">
        {products.map(product => (
          <SummaryProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="row-start-11 row-end-13 col-start-1 col-end-13  grid grid-rows-2">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-3xl font-semibold">Total:</h2>
          <h2 className="text-white text-3xl font-semibold">${total}</h2>
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
