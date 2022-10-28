import Image from 'next/image';
import { useState } from 'react';
import SecondaryLogos from '../public/logosfalopas.svg';
import Logo from '../public/logo.svg';
export const Header = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <header className="h-[10vh]  ">
      <div className="py-6 px-8 flex justify-between items-center">
        <h2 className="text-white text-8xl font-medium md:hidden">b.</h2>

        <Image src={Logo} alt="Logo Store" className="hidden md:block" />
        <Image
          src={SecondaryLogos}
          alt="Logos falopas"
          className="hidden md:block"
        />
        <button
          className="text-white border-2 border-white rounded-full px-10 py-2 text-xl"
          onClick={() => setCartCount(cartCount + 1)}
        >
          CART ({cartCount})
        </button>
      </div>
    </header>
  );
};
