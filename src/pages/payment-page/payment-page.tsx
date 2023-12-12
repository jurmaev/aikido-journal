import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import PaymentList from '../../components/payment/payment-list/payment-list';

export default function PaymentPage() {
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
