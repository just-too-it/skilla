import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, icon, disabled, type = 'button', ...otherProps } = props;
  return (
    <button type={type} className={clsx(styles.button, className)} disabled={disabled} {...otherProps}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};
