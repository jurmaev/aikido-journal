import styles from './payment.module.css';
import baseStyles from '../base.module.css';
export default function PaymentPage() {
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
        <div className={`${baseStyles.container} ${styles.paymentContainer}`}>
          <h1 className={styles.paymentTitle}>Задолженность</h1>
          <h2 className={styles.paymentSubtitle}>Задолженность по оплате</h2>
          <div
            className={`${baseStyles.inputGroup} ${styles.paymentInputGroup}`}
          >
            <input
              className={`${baseStyles.formInput} ${styles.paymentInput}`}
              type="text"
              placeholder="Введите ФИО родителя"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.paymentList}>
            <li className={styles.paymentItem}>
              Абрамова Маргарита Львовна : 1750 рублей
            </li>
            <li className={styles.paymentItem}>
              Курочкина Светлана Алексеевна : 1000 рублей
            </li>
            <li className={styles.paymentItem}>
              Иванова Наталья Сергеевна : 500 рублей
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
