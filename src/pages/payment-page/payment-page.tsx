import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';
import { payment } from '../../mocks/payment';
import { getShortName } from '../../utils/names';
import { useState } from 'react';

export default function PaymentPage() {
  const isMobile = window.innerWidth < 1024;
  const [paymentState, setPaymentState] = useState(payment);
  const [filterValue, setFilterValue] = useState('');

  function handleFilterClick() {
    if (filterValue === '') {
      setPaymentState(payment);
    } else {
      setPaymentState(
        payment.filter((item) => item.name.toLowerCase().includes(filterValue))
      );
    }
  }

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.paymentContainer)}>
          <h1 className={styles.paymentTitle}>Задолженность</h1>
          <h2 className={styles.paymentSubtitle}>Задолженность по оплате</h2>
          <div className={cn(baseStyles.inputGroup, styles.paymentInputGroup)}>
            <input
              className={cn(baseStyles.formInput, styles.paymentInput)}
              type="text"
              placeholder="Введите ФИО родителя"
              onChange={(evt) => setFilterValue(evt.target.value)}
            />
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
              onClick={handleFilterClick}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.paymentList}>
            {paymentState.map((item) => (
              <li key={item.id} className={styles.paymentItem}>
                {isMobile ? getShortName(item.name) : item.name} : {item.debt}{' '}
                рублей
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
