import { ReactNode } from 'react';
import styles from '../../../pages/base.module.css';
import cn from 'classnames';

type ModalProps = {
  isActive: boolean;
  isCentral: boolean;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({
  isActive,
  isCentral,
  children,
  onClose,
}: ModalProps) {
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
            <button
              className={cn(styles.btn, styles.modalClose)}
              aria-label="Close modal"
              onClick={onClose}
            >
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="0.500366"
                  width="24"
                  height="24"
                  rx="4.5"
                  stroke="black"
                />
                <path
                  d="M10 10L16 16"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10L10 16"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
