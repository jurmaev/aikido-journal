import baseStyles from '../base.module.css';
import styles from './parent-schedule.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { parentSchedule } from '../../mocks/parent-schedule';
import { getFullName } from '../../utils/names';
import TableHeader from '../../components/parent-schedule/table-header/table-header';
import TableCell from '../../components/parent-schedule/table-cell/table-cell';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useEffect } from 'react';

export default function ParentSchedulePage() {
  const isMobile = useIsMobile();
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс '];

  useEffect(() => {
    document.title = 'Расписание';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.scheduleContainer)}>
          <h1 className={styles.scheduleTitle}>Расписание</h1>
          <p className={styles.scheduleText}>
            Ребёнок: {getFullName(parentSchedule.child)}
          </p>
          <p className={styles.scheduleText}>
            Тренер: {parentSchedule.trainer.name}
          </p>
          <p className={styles.scheduleText}>
            Номер тренера: {parentSchedule.trainer.phone}
          </p>
          <p className={styles.scheduleText}>
            Название группы: {parentSchedule.group.name}
          </p>
          <p className={styles.scheduleText}>
            Цена за занятие: {parentSchedule.group.cost}₽
          </p>
          <p className={styles.scheduleText}>Расписание:</p>
          <table>
            <thead>
              <tr>
                {days.map((day, index) =>
                  isMobile ? (
                    parentSchedule.schedule[index].time && (
                      <TableHeader key={index} day={day} index={index} />
                    )
                  ) : (
                    <TableHeader key={index} day={day} index={index} />
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {parentSchedule.schedule.map((item) =>
                  isMobile ? (
                    item.time && (
                      <TableCell
                        key={item.day}
                        day={item.day}
                        time={item.time}
                      />
                    )
                  ) : (
                    <TableCell key={item.day} day={item.day} time={item.time} />
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
