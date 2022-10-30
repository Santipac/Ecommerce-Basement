import Image from 'next/image';
import React from 'react';
import FooterImage from '../../public/footer.svg';
export const Footer = () => {
  return (
    <div className="p-8">
      <Image src={FooterImage} alt="Footer Image" className="w-full" />
    </div>
  );
};
