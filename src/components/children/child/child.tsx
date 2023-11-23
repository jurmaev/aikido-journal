import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/children-page/children.module.css';
import cn from 'classnames';
import { Child } from '../../../types/children';
import { getFullName } from '../../../utils/names';
import { highlightText } from '../../../utils/highlight';
import Modal from '../../modal/modal';
import { useState } from 'react';

type ChildItemProps = {
  child: Child;
  highlightedValue: string;
  handleDelete: (id: string) => void;
};

export default function ChildItem({
  child,
  highlightedValue,
  handleDelete,
}: ChildItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li key={`${child.id}-item`} className={styles.childrenItem}>
        <span className={styles.childrenText}>
          {highlightedValue !== ''
            ? highlightText(getFullName(child), highlightedValue)
            : getFullName(child)}
        </span>
        <svg
          onClick={() => setIsActive(true)}
          className={styles.childrenIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L9 15"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9L15 15"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
      <Modal
        key={`${child.id}-modal`}
        isActive={isActive}
        isCentral
        onClose={() => setIsActive(false)}
      >
        <h2 className={baseStyles.modalTitle}>
          Вы действительно хотите удалить ребенка?
        </h2>
        <p className={baseStyles.modalText}>ФИО: {getFullName(child)}</p>
        <div className={baseStyles.inputGroup}>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnRed,
              baseStyles.btnLarge
            )}
            aria-label="Удалить"
            onClick={() => handleDelete(child.id)}
          >
            Удалить
          </button>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnBlue,
              baseStyles.btnLarge
            )}
            aria-label="Отменить"
            onClick={() => setIsActive(false)}
          >
            Отменить
          </button>
        </div>
      </Modal>
    </>
  );
}
