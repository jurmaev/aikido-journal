import styles from './parent-profile.module.css';
import baseStyles from '../base.module.css';
export default function ParentProfilePage() {
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
          <nav className={`${baseStyles.nav} ${styles.nav}`}>
            <ul className={baseStyles.navList}>
              <li className={baseStyles.navItem}>
                <a href="#">Профиль</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Расписание</a>
              </li>
              <li className={baseStyles.navItem}>
                <a href="#">Посещаемость</a>
              </li>
            </ul>
          </nav>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.headerBtn}`}
            aria-label="Войти"
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className={`${baseStyles.container} ${styles.profileContainer}`}>
          <h1 className={styles.profileTitle}>Профиль</h1>
          <div className={styles.profileInfo}>
            <div className={styles.infoLeft}>
              <p className={styles.profileText}>
                Вы: Абрамова Маргарита Львовна
              </p>
              <p className={styles.profileText}>Дети: Абрамов Пётр Иванович</p>
            </div>
            <div className={styles.infoRight}>
              <p className={styles.profileText}>Телефон: +7(950)526-26-26</p>
            </div>
          </div>
          <div className={baseStyles.inputGroup}>
            <div className={styles.paymentContainer}>
              Задолженность по оплате: 750 рублей
            </div>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Оплатить онлайн
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
