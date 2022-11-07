import Image from 'next/image';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
  CartProducts,
  SumQuantity,
  resQuantity,
} from '../../store/cart/cartSlice';

interface Props {
  product: CartProducts;
}

export const SummaryProduct: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border-white border-2 w-full sm:w-[70%] h-full grid grid-cols-12 p-2 mx-auto">
      <Image
        src={product.image}
        width={100}
        alt="Cart Product"
        className="col-start-1 col-end-4 bg-gradient-to-b from-black to-zinc-800"
      />
      <div className="flex flex-col col-start-4 col-end-13 pl-2">
        <h2 className="text-white font-semibold text-xl">{product.title}</h2>

        <div className="flex items-center justify-between h-full mt-6">
          <div className="flex items-center">
            <h2 className="text-white text-lg font-semibold">Quantity:</h2>
            <div className="border-white border flex px-4 rounded-full ml-2">
              <button
                className="text-white text-lg px-2"
                onClick={() => dispatch(resQuantity(product.id))}
              >
                -
              </button>
              <h2 className="text-lg text-white font-semibold">
                {product.quantity}
              </h2>
              <button
                className="text-white text-lg px-2"
                onClick={() => dispatch(SumQuantity(product.id))}
              >
                +
              </button>
            </div>
          </div>
          <h2 className="text-white font-semibold text-xl">${product.price}</h2>
        </div>
      </div>
    </div>
  );
};
