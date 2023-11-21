import baseStyles from '../base.module.css';
import styles from './parent-schedule.module.css';
import { NavItems } from '../../const';
import Header from '../../components/header/header';
import cn from 'classnames';
import { schedule } from '../../mocks/parent-schedule';

export default function ParentSchedulePage() {
  const isMobile = window.innerWidth < 1024;
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс '];

  return (
    <>
      <Header navItems={NavItems.Parent} />
      <main>
        <div className={cn(baseStyles.container, styles.scheduleContainer)}>
          <h1 className={styles.scheduleTitle}>Расписание</h1>
          <p className={styles.scheduleText}>Ребёнок: Абрамов Пётр Иванович</p>
          <p className={styles.scheduleText}>Тренер: Иванов Денис Сергеевич</p>
          <p className={styles.scheduleText}>Номер тренера: +7(950)528-28-28</p>
          <p className={styles.scheduleText}>Название группы: Группа1</p>
          <p className={styles.scheduleText}>Цена за занятие: 250₽</p>
          <p className={styles.scheduleText}>Расписание:</p>
          <table>
            <thead>
              <tr>
                {days.map(
                  (day, index) =>
                    isMobile &&
                    schedule[index].time && (
                      <th key={index} className={styles.tableHeader}>
                        {day}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {schedule.map(
                  (item) =>
                    isMobile &&
                    item.time && (
                      <td key={item.day} className={styles.tableCell}>
                        <div className={styles.tableCellContainer}>
                          {item.time && (
                            <div className={styles.tableTime}>
                              {item.time.startTime} - {item.time.endTime}
                            </div>
                          )}
                        </div>
                      </td>
                    )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
