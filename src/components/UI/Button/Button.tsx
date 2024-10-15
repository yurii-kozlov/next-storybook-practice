import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={cn(styles.button, styles[variant])} {...rest}>
      {children}
    </button>
  );
};
