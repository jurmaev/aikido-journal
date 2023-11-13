import baseStyles from '../base.module.css';
import styles from './children.module.css';
export default function ChildrenPage() {
  return (
    <>
      <header className={baseStyles.header}>
        <div
          className={`${baseStyles.container} ${baseStyles.headerContainer}`}
        >
          <a href="#">
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className={baseStyles.logo}
            />
          </a>
          <nav className={baseStyles.nav}>
            <ul className={baseStyles.navList}>
              <li className={baseStyles.navItem}>
                <a href="#">Дети</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Родители</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Группы</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Посещаемость</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Задолженность</a>
              </li>
            </ul>
          </nav>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.headerBtn}`}
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className={`${baseStyles.container} ${styles.childrenContainer}`}>
          <h1 className={styles.childrenTitle}>Дети</h1>
          <label htmlFor="child" className={styles.childrenLabel}>
            Добавить ребёнка
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.childrenInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.childrenInput}`}
              id="child"
              placeholder="Введите ФИО родителя"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Добавить ребёнка
            </button>
          </div>
          <label htmlFor="search" className={styles.childrenLabel}>
            Список детей
          </label>
          <div
            className={`${baseStyles.inputGroup} ${styles.childrenInputGroup}`}
          >
            <input
              type="text"
              className={`${baseStyles.formInput} ${styles.childrenInput}`}
              id="search"
              placeholder="Введите ФИО ребёнка"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.childrenList}>
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>Абрамов Пётр Иванович</span>
              <svg
                className="children__icon"
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
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>
                Курочкин Владислав Игорьевич
              </span>
              <svg
                className="children__icon"
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
            <li className={styles.childrenItem}>
              <span className={styles.childrenText}>
                Иванов Александр Степанович
              </span>
              <svg
                className="children__icon"
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
          </ul>
        </div>
      </main>
    </>
  );
}
