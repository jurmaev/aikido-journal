import baseStyles from '../base.module.css';
import styles from './parent-schedule.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';

export default function ParentSchedulePage() {
  return (
    <>
      <Header navItems={NavItems.Parent} />
      <main>
        <div className={cn(baseStyles.container, styles.scheduleContainer)}>
          <h1 className={styles.scheduleTitle}>Расписание</h1>
          <p className={styles.scheduleText}>Ребёнок: Абрамов Пётр Иванович</p>
          <p className={styles.scheduleText}>Название группы: Группа1</p>
          <p className={styles.scheduleText}>Цена за занятие: 250₽</p>
          <p className={styles.scheduleText}>Расписание:</p>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>Пн</th>
                <th className={styles.tableHeader}>Вт</th>
                <th className={styles.tableHeader}>Ср</th>
                <th className={styles.tableHeader}>Чт</th>
                <th className={styles.tableHeader}>Пт</th>
                <th className={styles.tableHeader}>Сб</th>
                <th className={styles.tableHeader}>Вс</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}>
                    <div className={styles.tableTime}>18:30 - 19:30</div>
                  </div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.tableCellContainer}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
