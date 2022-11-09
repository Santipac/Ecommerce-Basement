import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import { useUserStore } from '../../hooks/useUserStore';

export const DropdownMenu = () => {
  const { startSignOutUser, photoURL, displayName } = useUserStore();
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
            src={photoURL || ''}
            height={40}
            width={40}
            className="rounded-full object-cover cursor-pointer"
            alt="Avatar User"
          />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>My Orders</MenuItem>

        <MenuItem onClick={() => startSignOutUser()}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};
