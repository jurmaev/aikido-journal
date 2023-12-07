import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { getFullName, getShortName } from '../../../utils/names';
import { Parent } from '../../../types/parents';
import { Children } from '../../../types/children';
import { useIsMobile } from '../../../hooks/use-is-mobile';
import ChildSelect from '../child-select/child-select';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { removeChild } from '../../../store/parents-data/api-actions';

type ParentsModalProps = {
  parent: Parent;
  children: Children;
  childrenOptions: Children;
  handleSelect: (parentId: string, childId: number) => void;
  activeModal: string;
  setActiveModal: React.Dispatch<React.SetStateAction<string>>;
};

export default function ParentsModal({
  parent,
  children,
  childrenOptions,
  handleSelect,
  activeModal,
  setActiveModal,
}: ParentsModalProps) {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const [activeDeleteModal, setActiveDeleteModal] = useState(-1);

  function handleDelete(childId: number) {
    dispatch(removeChild({ parentId: parent.id, childId: childId }));
    setActiveDeleteModal(-1);
  }

  return (
    <Modal
      isActive={activeModal === parent.id}
      isCentral
      onClose={() => setActiveModal('')}
    >
      <h2 className={baseStyles.modalTitle}>Закрепить ребёнка за родителем</h2>
      <p className={baseStyles.modalText}>
        ФИО родителя:{' '}
        {isMobile ? getShortName(getFullName(parent)) : getFullName(parent)}
      </p>

      {children.length !== 0 &&
        children.map((child) => (
          <p key={`${child.id}-full-name`} className={baseStyles.modalText}>
            ФИО ребёнка:{' '}
            <span
              className={cn(baseStyles.modalText, {
                [styles.parentsDataEmpty]: !child,
              })}
            >
              {child && isMobile ? (
                <>
                  {getShortName(getFullName(child))}
                  <svg
                    onClick={() => setActiveDeleteModal(child.id)}
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
                  <Modal
                    isActive={activeDeleteModal === child.id}
                    isCentral
                    onClose={() => setActiveDeleteModal(-1)}
                  >
                    <h2 className={baseStyles.modalTitle}>
                      Вы действительно хотите удалить ребенка?
                    </h2>
                    <p className={baseStyles.modalText}>
                      ФИО: {getFullName(child)}
                    </p>
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
                        onClick={() => setActiveDeleteModal(-1)}
                      >
                        Отменить
                      </button>
                    </div>
                  </Modal>
                </>
              ) : child ? (
                <>
                  {getFullName(child)}
                  <svg
                    onClick={() => setActiveDeleteModal(child.id)}
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
                  <Modal
                    isActive={activeDeleteModal === child.id}
                    isCentral
                    onClose={() => setActiveDeleteModal(-1)}
                  >
                    <h2 className={baseStyles.modalTitle}>
                      Вы действительно хотите удалить ребенка?
                    </h2>
                    <p className={baseStyles.modalText}>
                      ФИО: {getFullName(child)}
                    </p>
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
                        onClick={() => setActiveDeleteModal(-1)}
                      >
                        Отменить
                      </button>
                    </div>
                  </Modal>
                </>
              ) : (
                'ребёнок не закреплён'
              )}
            </span>
          </p>
        ))}

      <p className={baseStyles.modalText}>
        ФИО ребёнка:{' '}
        <span className={cn(baseStyles.modalText, styles.parentsDataEmpty)}>
          ребёнок не закреплён
        </span>
      </p>

      {children.length !== 0 &&
        children.map((child) => (
          <ChildSelect
            key={`${child.id}-select`}
            child={child}
            parentId={parent.id}
            childrenOptions={childrenOptions}
            handleSelect={handleSelect}
          />
        ))}

      <ChildSelect
        child={null}
        parentId={parent.id}
        childrenOptions={childrenOptions}
        handleSelect={handleSelect}
      />
    </Modal>
  );
}
