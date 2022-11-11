import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { RootState } from '../../store';
import { CartModal } from './CartModal';
import { useState } from 'react';
import Logo from '../../public/logo.svg';
import SecondaryLogos from '../../public/SecondaryLogos.svg';
import { useUserStore } from '../../hooks/useUserStore';
import { DropdownMenu } from './DropdownMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { startLoginUser, status } = useUserStore();

  const handleCart = () => {
    setIsOpen(!isOpen);
  };

  const cartCount = useSelector((state: RootState) => state.cart.cartCounter);
  return (
    <header className="h-[10vh] relative inset-y-0 right-0 animate__fadeInTopRight ">
      <div className="py-6 px-8 flex justify-between  md:items-center">
        <Link href="/">
          <h2 className="text-white text-6xl font-medium md:hidden ">b.</h2>

          <Image src={Logo} alt="Logo Store" className="hidden md:block" />
        </Link>
        <Image
          src={SecondaryLogos}
          alt="Logos falopas"
          className="hidden md:block"
        />
        <div className="flex items-center space-x-2">
          <button className="relative flex pr-2" onClick={() => handleCart()}>
            <FaShoppingCart size="30px" color="white" className="flex-1 " />
            <span className="absolute bottom-5 left-5 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-normal text-sm  leading-tight text-center">
              {cartCount}{' '}
            </span>
          </button>
          {status === 'authenticated' ? (
            <DropdownMenu />
          ) : (
            <button
              className="font-semibold text-md px-6 py-1.5 border-white border rounded-full text-white"
              onClick={() => startLoginUser()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <CartModal isOpen={isOpen} handleCart={handleCart} />
    </header>
  );
};
