import { ReactNode } from 'react';
import styles from '../../pages/base.module.css';

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
            className={`${styles.container} ${styles.modalContent} ${
              isCentral && styles.modalCenter
            }`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
