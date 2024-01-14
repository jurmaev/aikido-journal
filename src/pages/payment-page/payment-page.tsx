import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import PaymentList from '../../components/payment/payment-list/payment-list';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchDebt } from '../../store/debt-data/api-actions';

export default function PaymentPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDebt());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Задолженность';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.paymentContainer)}>
          <h1 className={styles.paymentTitle}>Задолженность</h1>

          <PaymentList />
        </div>
      </main>
    </>
  );
}
