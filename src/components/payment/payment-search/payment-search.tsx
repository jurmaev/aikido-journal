import styles from '../../../pages/payment-page/payment.module.css';
import baseStyles from '../../../pages/base.module.css';
import cn from 'classnames';
import { useState } from 'react';

type PaymentSearchProps = {
  onFilter: (filterValue: string) => void;
  setHighlightedValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function PaymentSearch({
  onFilter,
  setHighlightedValue,
}: PaymentSearchProps) {
  const [filterValue, setFilterValue] = useState('');

  function handleFilterClick() {
    if (filterValue.trim() === '') {
      onFilter(filterValue.trim());
      setFilterValue('');
      setHighlightedValue('');
    } else {
      onFilter(filterValue.trim());
      setFilterValue(filterValue.trim());
      setHighlightedValue(filterValue.trim());
    }
  }

  return (
    <>
      <h2 className={styles.paymentSubtitle}>Задолженность по оплате</h2>
      <div className={cn(baseStyles.inputGroup, styles.paymentInputGroup)}>
        <input
          className={cn(baseStyles.formInput, styles.paymentInput)}
          type="text"
          placeholder="Введите ФИО родителя"
          value={filterValue}
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
    </>
  );
}
