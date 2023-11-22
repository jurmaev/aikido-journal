import baseStyles from '../base.module.css';
import styles from './children.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import { useState } from 'react';
import Modal from '../../components/modal/modal';
import { children } from '../../mocks/children';
import cn from 'classnames';
import { capitalizeWords, getFullName } from '../../utils/names';
import { highlightText } from '../../utils/highlight';

export default function ChildrenPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [childrenState, setChildrenState] = useState(children);
  const [addInput, setAddInput] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  function handleAddClick() {
    if (
      addInput.trim().split(' ').length >= 2 &&
      addInput.trim().split(' ').length < 4
    ) {
      const [surname, name, patronymic] = capitalizeWords(
        addInput.trim()
      ).split(' ');
      setChildrenState(
        childrenState.concat({
          id: crypto.randomUUID(),
          name: name,
          surname: surname,
          patronymic: patronymic ? patronymic : '',
        })
      );
      setErrorText('');
      setAddInput('');
    } else {
      setErrorText('ФИО введено некорректно');
    }
  }

  function handleDeleteClick(id: string) {
    setChildrenState(childrenState.filter((child) => child.id !== id));
  }

  function handleSortClick() {
    if (sortValue.trim() !== '') {
      setChildrenState(
        children.filter((child) =>
          getFullName(child).toLowerCase().includes(sortValue.trim())
        )
      );
      setSortValue(sortValue.trim());
      setIsSorted(true);
    } else {
      setChildrenState(children);
      setSortValue('');
      setIsSorted(false);
    }
  }

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.childrenContainer)}>
          <h1 className={styles.childrenTitle}>Дети</h1>
          <label htmlFor="child" className={styles.childrenLabel}>
            Добавить ребёнка
          </label>
          <p className={baseStyles.formError}>{errorText}</p>
          <div className={cn(baseStyles.inputGroup, styles.childrenInputGroup)}>
            <input
              type="text"
              className={cn(baseStyles.formInput, styles.childrenInput)}
              id="child"
              placeholder="Введите ФИО ребёнка"
              value={addInput}
              onChange={(evt) => setAddInput(evt.target.value)}
            />
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnRed,
                baseStyles.btnLarge
              )}
              onClick={handleAddClick}
            >
              Добавить ребёнка
            </button>
          </div>
          <label htmlFor="search" className={styles.childrenLabel}>
            Список детей
          </label>
          <div className={cn(baseStyles.inputGroup, styles.childrenInputGroup)}>
            <input
              type="text"
              className={cn(baseStyles.formInput, styles.childrenInput)}
              id="search"
              placeholder="Введите ФИО ребёнка"
              value={sortValue}
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
          <ul className={styles.childrenList}>
            {childrenState.length !== 0 ? (
              childrenState.map((child) => [
                <li key={`${child.id}-item`} className={styles.childrenItem}>
                  <span className={styles.childrenText}>
                    {isSorted
                      ? highlightText(getFullName(child), sortValue)
                      : getFullName(child)}
                  </span>
                  <svg
                    onClick={() => setActiveModal(child.id)}
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
                </li>,
                <Modal
                  key={`${child.id}-modal`}
                  isActive={activeModal === child.id}
                  isCentral
                  onClose={() => setActiveModal(null)}
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
                      onClick={() => handleDeleteClick(child.id)}
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
                      onClick={() => setActiveModal(null)}
                    >
                      Отменить
                    </button>
                  </div>
                </Modal>,
              ])
            ) : (
              <p className={baseStyles.failText}>
                По вашему запросу детей не найдено
              </p>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}
