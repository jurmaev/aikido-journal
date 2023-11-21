import styles from './parent-profile.module.css';
import baseStyles from '../base.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';

export default function ParentProfilePage() {
  return (
    <>
      <Header navItems={NavItems.Parent} />
      <main>
        <div className={cn(baseStyles.container, styles.profileContainer)}>
          <h1 className={styles.profileTitle}>Профиль</h1>
          <div className={styles.profileInfo}>
            <div className={styles.infoLeft}>
              <p className={styles.profileText}>
                Вы: Абрамова Маргарита Львовна
              </p>
              <p className={styles.profileText}>Дети: Абрамов Пётр Иванович</p>
            </div>
            <div className={styles.infoRight}>
              <p className={styles.profileText}>Ваш телефон: +7(950)526-26-26</p>
            </div>
          </div>
          <div className={baseStyles.inputGroup}>
            <div className={styles.paymentContainer}>
              Задолженность: 750 рублей
            </div>
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnRed,
                baseStyles.btnLarge
              )}
            >
              Оплатить онлайн
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
