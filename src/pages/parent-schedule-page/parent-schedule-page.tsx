import baseStyles from '../base.module.css';
import styles from './parent-schedule.module.css';
import { NavItems } from '../../const';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { parentSchedule } from '../../mocks/parent-schedule';
import { getFullName } from '../../utils/names';
import TableHeader from '../../components/parent-schedule/table-header/table-header';
import TableCell from '../../components/parent-schedule/table-cell/table-cell';

export default function ParentSchedulePage() {
  const isMobile = window.innerWidth < 1024;
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс '];

  return (
    <>
      <Header navItems={NavItems.Parent} />
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
