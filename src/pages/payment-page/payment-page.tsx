import styles from './payment.module.css';
import baseStyles from '../base.module.css';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Header from '../../components/header/header';
export default function PaymentPage() {
  return (
    <>
      <Header>
        <nav className={baseStyles.nav}>
          <ul className={baseStyles.navList}>
            <li>
              <NavLink
                to={AppRoutes.Children}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Дети
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Parents}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Родители
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Groups}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Группы
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Attendance}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Посещаемость
              </NavLink>
            </li>
            <li>
              <NavLink
                to={AppRoutes.Payment}
                className={({ isActive }: { isActive: boolean }): string =>
                  isActive
                    ? `${baseStyles.navItem} ${baseStyles.navItemActive}`
                    : baseStyles.navItem
                }
              >
                Задолженность
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <div className={`${baseStyles.container} ${styles.paymentContainer}`}>
          <h1 className={styles.paymentTitle}>Задолженность</h1>
          <h2 className={styles.paymentSubtitle}>Задолженность по оплате</h2>
          <div
            className={`${baseStyles.inputGroup} ${styles.paymentInputGroup}`}
          >
            <input
              className={`${baseStyles.formInput} ${styles.paymentInput}`}
              type="text"
              placeholder="Введите ФИО родителя"
            />
            <button
              className={`${baseStyles.btn} ${baseStyles.btnBlue} ${baseStyles.btnLarge}`}
            >
              Поиск
            </button>
          </div>
          <ul className={styles.paymentList}>
            <li className={styles.paymentItem}>
              Абрамова Маргарита Львовна : 1750 рублей
            </li>
            <li className={styles.paymentItem}>
              Курочкина Светлана Алексеевна : 1000 рублей
            </li>
            <li className={styles.paymentItem}>
              Иванова Наталья Сергеевна : 500 рублей
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
