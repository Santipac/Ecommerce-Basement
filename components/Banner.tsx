import Image from 'next/image';
import BannerImage from '../public/header.svg';
export const Banner = () => {
  return (
    <div className="min-h p-8 mt-8">
      <Image src={BannerImage} alt="Banner Image" className="w-full" />
    </div>
  );
};
