import React, { FC } from 'react';
import noavatar from 'assets/icons/noavatar.jpg';
import styles from './Avatar.module.scss';

interface AvatarProps {
  name?: string;
  img?: string;
  width?: number;
  height?: number;
}

export const Avatar: FC<AvatarProps> = ({ img, name, width, height }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={img ? img : noavatar}
        width={width}
        height={height}
        alt={name ? name : 'Сотрудник'}
        className={styles.img}
      />
    </div>
  );
};
