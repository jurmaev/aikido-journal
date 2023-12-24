import styles from '../../../pages/payment-page/payment.module.css';
import baseStyles from '../../../pages/base.module.css';
import PaymentSearch from '../payment-search/payment-search';
import { getHighlightedParentName } from '../../../utils/highlight';
import { useState } from 'react';
import { useIsMobile } from '../../../hooks/use-is-mobile';
import { useAppSelector } from '../../../hooks';
import { getDebt } from '../../../store/debt-data/debt-data.selectors';
import { getFullName } from '../../../utils/names';

export default function PaymentList() {
  const isMobile = useIsMobile();
  const payment = useAppSelector(getDebt);
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
          {paymentState.map((item, index) => (
            <li key={index} className={styles.paymentItem}>
              {getHighlightedParentName(
                getFullName(item),
                isMobile,
                highlightedValue
              )}{' '}
              : {item.payment_arrears} рублей
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
