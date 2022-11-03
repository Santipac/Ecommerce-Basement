import Image from 'next/image';
import SecondaryLogos from '../../public/SecondaryLogos.svg';
import Logo from '../../public/logo.svg';
import { useSelector } from 'react-redux';

import Link from 'next/link';
import { RootState } from '../../store';

import { useState } from 'react';
import { CartModal } from './CartModal';
export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCart = () => {
    setIsOpen(!isOpen);
  };

  const cartCount = useSelector((state: RootState) => state.cart.cartCounter);
  return (
    <header className="h-[10vh] relative top-0 left-0 ">
      <div className="py-6 px-8 flex justify-between items-center">
        <Link href="/">
          <h2 className="text-white text-8xl font-medium md:hidden">b.</h2>

          <Image src={Logo} alt="Logo Store" className="hidden md:block" />
        </Link>
        <Image
          src={SecondaryLogos}
          alt="Logos falopas"
          className="hidden md:block"
        />
        <button
          className="text-white border-2 border-white rounded-full px-10 py-2 text-xl"
          onClick={() => handleCart()}
        >
          {`CART  ( ${cartCount} ) `}
        </button>
      </div>
      <CartModal isOpen={isOpen} handleCart={handleCart} />
    </header>
  );
};
