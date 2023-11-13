import styles from './parent-profile.module.css';
import baseStyles from '../base.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
export default function ParentProfilePage() {
  return (
    <>
      <Header>
        <nav className={`${baseStyles.nav} ${styles.nav}`}>
          <ul className={baseStyles.navList}>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentProfile}>Профиль</NavLink>
            </li>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentSchedule}>Расписание</NavLink>
            </li>
            <li className={baseStyles.navItem}>
              <NavLink to={AppRoutes.ParentAttendance}>Посещаемость</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <div className={`${baseStyles.container} ${styles.profileContainer}`}>
          <h1 className={styles.profileTitle}>Профиль</h1>
          <div className={styles.profileInfo}>
            <div className={styles.infoLeft}>
              <p className={styles.profileText}>
                Вы: Абрамова Маргарита Львовна
              </p>
              <p className={styles.profileText}>Дети: Абрамов Пётр Иванович</p>
            </div>
            <div className={styles.infoRight}>
              <p className={styles.profileText}>Телефон: +7(950)526-26-26</p>
            </div>
          </div>
          <div className={baseStyles.inputGroup}>
            <div className={styles.paymentContainer}>
              Задолженность по оплате: 750 рублей
            </div>
            <button
              className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            >
              Оплатить онлайн
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
