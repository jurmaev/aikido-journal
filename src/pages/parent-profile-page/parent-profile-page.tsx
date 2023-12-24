import styles from './parent-profile.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { parentProfile } from '../../mocks/parent-profile';
import { getFullName } from '../../utils/names';
import { useEffect } from 'react';

export default function ParentProfilePage() {
  const profileInfo = parentProfile;

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.profileContainer)}>
          <h1 className={styles.profileTitle}>Профиль</h1>
          <div className={styles.profileInfo}>
            <div className={styles.infoLeft}>
              <p className={styles.profileText}>Вы: {profileInfo.name}</p>
              <p className={styles.profileText}>
                Дети: {getFullName(profileInfo.child)}
              </p>
            </div>
            <div className={styles.infoRight}>
              <p className={styles.profileText}>
                Ваш телефон: {profileInfo.phone}
              </p>
            </div>
          </div>
          <div className={baseStyles.inputGroup}>
            <div className={styles.paymentContainer}>
              Задолженность: {profileInfo.debt} рублей
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
