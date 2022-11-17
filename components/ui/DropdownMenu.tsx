import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUserStore } from '../../hooks/useUserStore';

export const DropdownMenu = () => {
  const router = useRouter();
  const { startSignOutUser, photoURL, displayName, uid } = useUserStore();

  const signOut = () => {
    router.replace('/');
    startSignOutUser();
  };

  return (
    <Menu>
      <MenuHandler>
        <Button
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: '100%',
            padding: 0,
          }}
        >
          <Image
            src={photoURL ?? ''}
            height={40}
            width={40}
            className="rounded-full object-cover cursor-pointer"
            alt="Avatar User"
          />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
        <MenuItem>
          <Link href={`/orders/${uid}`}>My Orders</Link>
        </MenuItem>

        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};
