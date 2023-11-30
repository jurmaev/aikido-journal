import styles from '../../../pages/payment-page/payment.module.css';
import baseStyles from '../../../pages/base.module.css';
import PaymentSearch from '../payment-search/payment-search';
import { getHighlightedParentName } from '../../../utils/highlight';
import { useState } from 'react';
import { payment } from '../../../mocks/payment';

export default function PaymentList() {
  const isMobile = window.innerWidth < 1024;
  const [paymentState, setPaymentState] = useState(payment);
  const [highlightedValue, setHighlightedValue] = useState('');

  function handleFilter(filterValue: string) {
    if (filterValue === '') {
      setPaymentState(payment);
    } else {
      setPaymentState(
        payment.filter((item) =>
          item.name.toLowerCase().includes(filterValue.trim())
        )
      );
      setHighlightedValue(filterValue.trim());
    }
  }

  return (
    <>
      <PaymentSearch
        onFilter={handleFilter}
        setHighlightedValue={setHighlightedValue}
      />

      {paymentState.length !== 0 ? (
        <ul className={styles.paymentList}>
          {paymentState.map((item) => (
            <li key={item.id} className={styles.paymentItem}>
              {getHighlightedParentName(item.name, isMobile, highlightedValue)}{' '}
              : {item.debt} рублей
            </li>
          ))}
        </ul>
      ) : (
        <p className={baseStyles.failText}>
          По вашему запросу ничего не найдено
        </p>
      )}
    </>
  );
}
