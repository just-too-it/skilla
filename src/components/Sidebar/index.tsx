import React, { FC } from 'react';
import styles from './Sidebar.module.scss';

import { Menu } from 'components/Sidebar/Menu';
import { MenuItemType } from 'components/Sidebar/Menu/MenuItem/MenuItem.types';
import { Logo } from 'components/ui/Logo';
import { Link } from 'react-router-dom';
import { Button } from 'components/ui/Button';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as AlertIcon } from 'assets/icons/plus.svg';

interface SidebarProps {
  menu: MenuItemType[];
}

export const Sidebar: FC<SidebarProps> = ({ menu }) => {
  return (
    <section className={styles.sidebar}>
      <Link to={'/'} title="Skilla" className={styles.link}>
        <Logo />
      </Link>

      <Menu menu={menu} />
      
      <div className={styles.buttons}>
        <Button icon={<PlusIcon width={24} height={24} />}>Добавить заказ</Button>
        <Button icon={<AlertIcon width={24} height={24} />}>Оплата</Button>
      </div>
    </section>
  );
};
