import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserStore } from '../../hooks/useUserStore';

import React, { useState } from 'react';

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { startSignOutUser, photoURL, displayName, uid } = useUserStore();

  const signOut = () => {
    router.replace('/');
    startSignOutUser();
  };

  const onOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="rounded-full relative" onClick={() => onOpenMenu()}>
        <Image
          src={photoURL ?? ''}
          height={40}
          width={40}
          className="rounded-full object-cover cursor-pointer"
          alt="Avatar User"
        />
      </button>
      {isOpen && (
        <div className="h-36 w-36 absolute right-12 z-4 mt-1 bg-black border-2 border-gray-600 text-white rounded-md flex flex-col space-y-1.5">
          <p className="px-2 pt-2 text-center">{displayName?.split(' ')[0]}</p>
          <div className="w-full h-[1.2px] bg-gray-600"></div>
          <Link href="/" className="px-2">
            Home
          </Link>
          <Link href={`/orders/${uid}`} className="px-2">
            Orders
          </Link>
          <div className="w-full h-[1.2px] bg-gray-600"></div>
          <button
            onClick={() => signOut()}
            className="px-2 text-indigo-500 text-left"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
