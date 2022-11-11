import Link from 'next/link';
import React, { useState } from 'react';
import { FormCheckout } from './FormCheckout';

import { OrderSummary } from './OrderSummary';
export const Checkout = () => {
  return (
    <div className="min-h-[80vh] p-4 ">
      <h2 className="text-gray-400 font-semibold text-4xl pt-8 pl-4 ">
        Checkout
      </h2>
      <Link href="/">
        <p className="text-gray-600 underline pl-4 hover:text-gray-500">
          Back to Home
        </p>
      </Link>
      <div className="p-4 grid auto-rows-min md:grid-cols-2 md:grid-rows-1 gap-4">
        <FormCheckout />
        <OrderSummary />
      </div>
    </div>
  );
};
