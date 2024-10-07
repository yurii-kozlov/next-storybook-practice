import { FC } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

type InputProps = {
  size: 'small' | 'medium' | 'large';
  placeholder: string
};

export const Input: FC<InputProps> = ({ size, ...rest }) => {
  return (
    <input className={cn(styles.input, styles[size])} type="text" {...rest} />
  );
};