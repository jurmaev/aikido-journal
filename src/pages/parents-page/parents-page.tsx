import styles from './parents.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/header/header';
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import { parents } from '../../mocks/parents';
import { children } from '../../mocks/children';
import { Child } from '../../types/children';
import { NavItems } from '../../const';
import { getShortName } from '../../utils/names';
import cn from 'classnames';

export default function ParentsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [parentsState, setParentsState] = useState(parents);
  const [sortValue, setSortValue] = useState('');
  const [selectValue, setSelectValue] = useState({ parentId: '', childId: '' });
  const isMobile = window.innerWidth < 1024;

  function handleSortClick() {
    if (sortValue !== '') {
      setParentsState(
        parents.filter((parent) =>
          parent.name.toLowerCase().includes(sortValue)
        )
      );
    } else {
      setParentsState(parents);
    }
  }

  function handleSelectClick() {
    if (selectValue.childId === '') return;
    const nextParentsState = [...parentsState];
    const parent = nextParentsState.find(
      (parent) => parent.id === selectValue.parentId
    )!;

    const child = children.find(
      (child) => child.id === selectValue.childId
    ) as Child;

    parent.child = {
      id: child.id,
      fullName: `${child.surname} ${child.name} ${child.patronymic}`,
    };
    setParentsState(nextParentsState);
    setActiveModal(null);
  }

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.parentsContainer)}>
          <h1 className={styles.parentsHeader}>Родители</h1>
          <label htmlFor="search" className={styles.parentsLabel}>
            Список (Родитель/Ребёнок)
          </label>
          <div className={cn(baseStyles.inputGroup, styles.parentsInputGroup)}>
            <input
              type="text"
              className={cn(baseStyles.formInput, styles.formInput)}
              id="search"
              placeholder="Введите ФИО родителя"
              onChange={(evt) => setSortValue(evt.target.value)}
            />
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
              onClick={handleSortClick}
            >
              Поиск
            </button>
          </div>
          <table className={styles.parentsTable}>
            <thead>
              <tr>
                <th className={styles.parentsData}>Родитель</th>
                <th className={styles.parentsData}>Ребёнок</th>
              </tr>
            </thead>
            <tbody>
              {parentsState.map((parent) => [
                <tr key={`${parent.id}-item`}>
                  <td className={styles.parentsData}>
                    <div className={styles.parentsDataContainer}>
                      {isMobile ? getShortName(parent.name) : parent.name}
                      <button
                        className={cn(baseStyles.btn, styles.parentsBtn)}
                        aria-label="Info"
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
                            d="M12 8V12"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 16H12.01"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className={styles.tooltip}>
                          <a href={`tel:${parent.phone}`}>{parent.phone}</a>
                        </div>
                      </button>
                    </div>
                  </td>
                  <td
                    className={cn(styles.parentsData, {
                      [styles.parentsDataEmpty]: !parent.child,
                    })}
                  >
                    <div className={styles.parentsDataContainer}>
                      {parent.child
                        ? isMobile
                          ? getShortName(parent.child.fullName)
                          : parent.child.fullName
                        : 'ребёнок не закреплён'}
                      <button
                        className={cn(baseStyles.btn, styles.parentsBtn)}
                        aria-label="Edit"
                        onClick={() => setActiveModal(parent.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.9403 20H20.8061"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>,
                <Modal
                  key={`${parent.id}-modal`}
                  isActive={parent.id === activeModal}
                  isCentral
                  onClose={() => setActiveModal(null)}
                >
                  <h2 className={baseStyles.modalTitle}>
                    Закрепить ребёнка за родителем
                  </h2>
                  <p className={baseStyles.modalText}>
                    ФИО родителя:{' '}
                    {isMobile ? getShortName(parent.name) : parent.name}
                  </p>
                  <p className={baseStyles.modalText}>
                    ФИО ребёнка:{' '}
                    <span className={styles.textRed}>ребёнок не закреплён</span>
                  </p>
                  <div className={baseStyles.inputGroup}>
                    <select
                      className={cn(
                        baseStyles.formInput,
                        styles.parentsModalInput
                      )}
                      aria-label="Children select"
                      defaultValue={parent.child?.id ? parent.child?.id : ''}
                      onChange={(evt) => {
                        setSelectValue({
                          ...selectValue,
                          childId: evt.target.value,
                          parentId: parent.id,
                        });
                      }}
                    >
                      <option value="">Выберите ребёнка</option>
                      {children.map(
                        (child) =>
                          child && (
                            <option key={child.id} value={child.id}>
                              {`${child.surname} ${child.name} ${child.patronymic}`}
                            </option>
                          )
                      )}
                    </select>
                    <button
                      className={cn(
                        baseStyles.btn,
                        baseStyles.btnBlue,
                        baseStyles.btnLarge
                      )}
                      onClick={handleSelectClick}
                    >
                      Закрепить за родителем
                    </button>
                  </div>
                </Modal>,
              ])}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
