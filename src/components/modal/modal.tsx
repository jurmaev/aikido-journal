import { ReactNode } from 'react';
import styles from '../../pages/base.module.css';
import cn from 'classnames';

type ModalProps = {
  isActive: boolean;
  isCentral: boolean;
  children: ReactNode;
};

export default function Modal({ isActive, isCentral, children }: ModalProps) {
  return (
    <>
      {isActive && (
        <div className={styles.modal}>
          <div
            className={cn(styles.container, styles.modalContent, {
              [styles.modalCenter]: isCentral,
            })}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
