import styles from '../../../pages/parents-page/parents.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import Modal from '../../ui/modal/modal';
import { getFullName, getShortName } from '../../../utils/names';
import { Parent } from '../../../types/parents';
import { Children } from '../../../types/children';
import { useIsMobile } from '../../../hooks/use-is-mobile';
import ChildSelect from '../child-select/child-select';
import { useAppDispatch } from '../../../hooks';
import { removeChild } from '../../../store/parents-data/api-actions';
import ChildItem from '../child/child';

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

  function handleDelete(childId: number) {
    dispatch(removeChild({ parentId: parent.id, childId: childId }));
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

      {children.length !== 0 ? (
        children.map((child) => (
          <div key={`${child.id}-full-name`} className={baseStyles.modalText}>
            ФИО ребёнка:{' '}
            <span
              className={cn(baseStyles.modalText, styles.childText, {
                [styles.parentsDataEmpty]: !child,
              })}
            >
              {isMobile ? (
                <ChildItem child={child} handleDelete={handleDelete} />
              ) : (
                <ChildItem child={child} handleDelete={handleDelete} />
              )}
            </span>
          </div>
        ))
      ) : (
        <p className={baseStyles.modalText}>
          ФИО ребёнка:{' '}
          <span className={cn(baseStyles.modalText, styles.parentsDataEmpty)}>
            ребёнок не закреплён
          </span>
        </p>
      )}

      <ChildSelect
        parentId={parent.id}
        childrenOptions={childrenOptions}
        handleSelect={handleSelect}
      />
    </Modal>
  );
}
