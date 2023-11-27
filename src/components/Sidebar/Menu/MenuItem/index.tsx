import React, { FC } from 'react';
import clsx from 'clsx';

import { MenuItemType } from 'components/Sidebar/Menu/MenuItem/MenuItem.types';
import { Link } from 'react-router-dom';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { name, link, Icon, isNew, isActive } = item;

  return (
    <Link to={link} className={clsx(styles.item, isNew && styles.item_isNew, isActive && styles.item_active)}>
      <Icon width={24} height={24} />
      <span className={styles.name}>{name}</span>
    </Link>
  );
};
