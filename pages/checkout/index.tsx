import Head from 'next/head';
import React from 'react';
import { Checkout } from '../../components/checkout';

const CheckoutPage = () => {
  return (
    <div className="bg-black min-h-screen animate__animated animate__fadeIn animate__faster">
      <Head>
        <title>Basement | Checkout </title>
        <meta name="description" content="Checkout page for payment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Checkout />
    </div>
  );
};

export default CheckoutPage;
