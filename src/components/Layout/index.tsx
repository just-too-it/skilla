import React, { FC, ReactNode } from 'react';

import { Sidebar } from 'components/Sidebar';
import { mockMenu } from 'core/data';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar menu={mockMenu} />
      {children}
    </div>
  );
};
