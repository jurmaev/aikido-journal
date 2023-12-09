import styles from '../../../pages/children-page/children.module.css';
import { Child } from '../../../types/children';
import { getFullName } from '../../../utils/names';
import { highlightText } from '../../../utils/highlight';
import { useState } from 'react';
import DeleteChildModal from '../delete-child-modal/delete-child-modal';

type ChildItemProps = {
  child: Child;
  highlightedValue: string;
  handleDelete: (id: number) => void;
};

export default function ChildItem({
  child,
  highlightedValue,
  handleDelete,
}: ChildItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <li className={styles.childrenItem}>
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
      <DeleteChildModal
        child={child}
        isActive={isActive}
        setIsActive={setIsActive}
        handleDelete={handleDelete}
      />
    </>
  );
}
