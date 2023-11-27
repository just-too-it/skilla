import React, { FC } from 'react';

import { MenuItem } from 'components/Sidebar/Menu/MenuItem';
import { MenuItemType } from 'components/Sidebar/Menu/MenuItem/MenuItem.types';

interface MenuProps {
  menu: MenuItemType[];
}

export const Menu: FC<MenuProps> = ({ menu }) => {
  const mockCurrentPage = '/calls';

  return (
    <nav>
      <ul>
        {menu &&
          menu.map((item) => (
            <li key={item.id}>
              <MenuItem
                item={{
                  ...item,
                  isActive: mockCurrentPage === item.link,
                }}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};
