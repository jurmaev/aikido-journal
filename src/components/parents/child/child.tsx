import styles from '../../../pages/parents-page/parents.module.css';
import { getFullName, getShortName } from '../../../utils/names';
import { Child } from '../../../types/children';
import { useState } from 'react';
import DeleteChildModal from '../../children/delete-child-modal/delete-child-modal';
import { useIsMobile } from '../../../hooks/use-is-mobile';

type ChildProps = {
  child: Child;
  handleDelete: (childId: number) => void;
};

export default function ChildItem({ child, handleDelete }: ChildProps) {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? getShortName(getFullName(child)) : getFullName(child)}
      <svg
        onClick={() => setIsActive(true)}
        className={styles.deleteIcon}
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
      <DeleteChildModal
        child={child}
        isActive={isActive}
        setIsActive={setIsActive}
        handleDelete={handleDelete}
      />
    </>
  );
}
