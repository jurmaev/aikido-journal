import styles from './parent-profile.module.css';
import baseStyles from '../base.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { getFullName } from '../../utils/names';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProfileInfo } from '../../store/parent-data/parent-data.selectors';
import { fetchProfileInfo } from '../../store/parent-data/api-actions';

export default function ParentProfilePage() {
  const dispatch = useAppDispatch();
  const profileInfo = useAppSelector(getProfileInfo);

  useEffect(() => {
    dispatch(fetchProfileInfo());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.profileContainer)}>
          <h1 className={styles.profileTitle}>Профиль</h1>
          {profileInfo && (
            <>
              <div className={styles.profileInfo}>
                <div className={styles.infoLeft}>
                  <p className={styles.profileText}>
                    Вы: {getFullName(profileInfo)}
                  </p>
                  <p className={styles.profileText}>
                    Дети:{' '}
                    {profileInfo.children
                      .map((child) => getFullName(child))
                      .join(', ')}
                  </p>
                </div>
                <div className={styles.infoRight}>
                  <p className={styles.profileText}>
                    Ваш телефон: {profileInfo.phone_number}
                  </p>
                </div>
              </div>
              <div className={baseStyles.inputGroup}>
                <div className={styles.paymentContainer}>
                  Задолженность: {profileInfo.payment_arrears} рублей
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
            </>
          )}
        </div>
      </main>
    </>
  );
}
