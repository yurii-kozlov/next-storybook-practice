import { FC, ReactNode } from "react";
import styles from './Center.module.scss';

interface CenterProps {
  children: ReactNode
}

export const Center: FC<CenterProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};