import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/groups-page/groups.module.css';
import cn from 'classnames';
import { Child } from '../../../types/children';
import { getFullName } from '../../../utils/names';
import Modal from '../../ui/modal/modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

type GroupChildItemProps = {
  child: Child;
  handleDelete: (id: number) => void;
};

export default function GroupChildItem({
  child,
  handleDelete,
}: GroupChildItemProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <li key={child.id} className={styles.item}>
        <span className={styles.itemText}>{getFullName(child)}</span>
        <button
          className={cn(baseStyles.btn, styles.listBtn)}
          aria-label="Delete child"
          onClick={() => setIsActive(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
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
        </button>
      </li>
      {createPortal(
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
        </Modal>,
        document.body
      )}
    </>
  );
}
