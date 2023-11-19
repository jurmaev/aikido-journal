import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
export default function PaymentPage() {
  return (
    <>
      <Header navItems={NavItems.Trainer} />
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
