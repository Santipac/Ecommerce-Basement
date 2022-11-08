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
    <div className="border-white border-2 w-full  h-full grid grid-cols-12  mx-auto relative">
      <Image
        src={product.image}
        fill
        alt="Cart Product"
        className="col-start-1 col-end-4 bg-gradient-to-b from-black to-zinc-800 object-contain"
      />
      <div className="flex flex-col col-start-4 col-end-13 p-2">
        <h2 className="text-white font-semibold text-xl md:text-3xl">
          {product.title}
        </h2>

        <div className="flex items-end md:items-center justify-between h-full mt-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-zinc-400 text-lg font-medium pl-2">
              Quantity:
            </h2>
            <div className="border-white border flex px-4 rounded-full ml-2 ">
              <button
                className="text-white text-lg px-3 "
                onClick={() => dispatch(resQuantity(product.id))}
              >
                -
              </button>
              <h2 className="text-lg text-white font-semibold">
                {product.quantity}
              </h2>
              <button
                className="text-white text-lg px-3"
                onClick={() => dispatch(SumQuantity(product.id))}
              >
                +
              </button>
            </div>
          </div>
          <h2 className="text-white font-semibold text-xl md:text-3xl ">
            ${product.price}
          </h2>
        </div>
      </div>
    </div>
  );
};
