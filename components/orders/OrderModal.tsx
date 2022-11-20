import { DocumentData } from 'firebase/firestore/lite';
import React, { FC } from 'react';
import { Product } from '../../types/orders';

interface Props {
  isOpen: boolean;
  handleModal: () => void;
  order: DocumentData;
}

export const OrderModal: FC<Props> = ({ isOpen, handleModal, order }) => {
  console.log(order);
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={
        isOpen
          ? 'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 p-4 w-full h-full backdrop-blur-md flex items-center justify-center'
          : 'hidden'
      }
    >
      <div className="w-full h-full max-w-3xl  flex justify-center items-center">
        <div className=" bg-gray-900 rounded-lg shadow border-gray-800 border-2 ">
          <div className="flex flex-col ">
            <div className="flex justify-between items-center pt-3 px-3 pb-1">
              <h3 className="text-xl  text-gray-400">
                Order:{' '}
                <span className="text-indigo-400 font-medium">
                  {order.id.slice(0, 8)}
                </span>
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:text-indigo-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-toggle="defaultModal"
                onClick={() => handleModal()}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <h2 className="text-gray-400  text-md pb-3 px-3">
              Created:
              <span className="px-2 font-medium text-indigo-400">
                {' '}
                {new Date(order.createdAt.seconds * 1000).toLocaleString()}
              </span>
            </h2>
          </div>

          <div className=" min-w-[20rem] sm:min-w-[35rem] min-h-[25rem] flex flex-col px-3">
            <div className="flex items-center justify-between py-2 bg-indigo-500 px-2 rounded-sm">
              <h2 className="text-white">Product</h2>
              <h2 className="text-white">Quantity</h2>
              <h2 className="text-white">Price</h2>
            </div>
            {order.products.map((product: Product) => (
              <div
                key={product.id}
                className="w-full space-y-4 flex flex-col py-4 px-2"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-400 ">{product.title}</h2>
                  <h2 className="text-gray-400 mr-4">x{product.quantity}</h2>
                  <h2 className="text-gray-400 ">${product.price}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-3 py-6 space-x-2 rounded-b border-t border-gray-800 ">
            <h2 className="text-xl text-gray-400">
              Total:{' '}
              <span className="text-indigo-400"> ${order.totalPaid}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

/*



*/
