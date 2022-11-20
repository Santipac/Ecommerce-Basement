import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const CheckoutSummary: FC = () => {
  const { products, total, cartCounter } = useSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className=" grid auto-rows-min md:mt-6">
      <div className="mt-4">
        <h3 className="text-gray-400 font-semibold text-2xl hidden md:block py-3">
          Order Summary
        </h3>
        <div className="w-full h-[1.5px] bg-gray-700"></div>
        <div className="flex flex-col pt-4">
          {products.map(product => (
            <div
              key={product.id}
              className="w-full flex justify-between items-center space-y-3"
            >
              <h3 className="text-medium text-gray-600 md:text-xl">
                {product.title}
              </h3>
              <h3 className="text-medium text-gray-600 md:text-xl">
                x{product.quantity}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-4 space-y-2">
        <div className="w-full flex justify-between items-center ">
          <h3 className="text-medium text-gray-600 md:text-xl">
            Total Products
          </h3>
          <h3 className="text-medium text-gray-600 md:text-xl">
            {cartCounter}
          </h3>
        </div>
      </div>
      <div>
        <div className="w-full h-[1.8px] bg-gray-700 mt-3"></div>
        <div className="w-full flex justify-between items-center mt-3">
          <h3 className="text-medium text-indigo-500 text-lg md:text-2xl">
            Total Order
          </h3>
          <h3 className="text-medium text-indigo-500 text-lg md:text-2xl">
            ${total}
          </h3>
        </div>
      </div>
    </div>
  );
};
