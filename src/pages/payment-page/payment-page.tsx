import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';
import PaymentList from '../../components/payment/payment-list/payment-list';

export default function PaymentPage() {
  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div className={cn(baseStyles.container, styles.paymentContainer)}>
          <h1 className={styles.paymentTitle}>Задолженность</h1>

          <PaymentList />
        </div>
      </main>
    </>
  );
}
