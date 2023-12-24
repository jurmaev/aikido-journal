import baseStyles from '../base.module.css';
import styles from './parent-schedule.module.css';
import Header from '../../components/ui/header/header';
import cn from 'classnames';
import { getFullName } from '../../utils/names';
import TableHeader from '../../components/parent-schedule/table-header/table-header';
import TableCell from '../../components/parent-schedule/table-cell/table-cell';
import { useIsMobile } from '../../hooks/use-is-mobile';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchChildrenSchedule } from '../../store/parent-data/api-actions';
import { getChildrenSchedule } from '../../store/parent-data/parent-data.selectors';
import React from 'react';

export default function ParentSchedulePage() {
  const isMobile = useIsMobile();
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс '];
  const dispatch = useAppDispatch();
  const scheduleInfo = useAppSelector(getChildrenSchedule);

  useEffect(() => {
    dispatch(fetchChildrenSchedule());
  }, [dispatch]);

  useEffect(() => {
    document.title = 'Расписание';
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={cn(baseStyles.container, styles.scheduleContainer)}>
          <h1 className={styles.scheduleTitle}>Расписание</h1>
          {scheduleInfo.length !== 0 ? (
            scheduleInfo.map((info, index) => (
              <React.Fragment key={index}>
                <p className={styles.scheduleText}>
                  Ребёнок: {getFullName(info)}
                </p>
                {info.group_inf ? (
                  <>
                    <p className={styles.scheduleText}>
                      Название группы: {info.group_inf.group_name}
                    </p>
                    <p className={styles.scheduleText}>
                      Цена за занятие: {info.group_inf.group_price}₽
                    </p>
                    <p className={styles.scheduleText}>
                      Тренер:{' '}
                      {getFullName({
                        name: info.group_inf.coach_name,
                        surname: info.group_inf.coach_surname,
                        patronymic: info.group_inf.coach_patronymic,
                      })}
                    </p>
                    <p className={styles.scheduleText}>
                      Номер тренера: {info.group_inf.coach_phone_number}
                    </p>
                    <p className={styles.scheduleText}>Расписание:</p>
                    <table>
                      <thead>
                        <tr>
                          {days.map((day, index) =>
                            isMobile ? (
                              info.group_inf.schedule[index] && (
                                <TableHeader
                                  key={index}
                                  day={day}
                                  index={index}
                                />
                              )
                            ) : (
                              <TableHeader
                                key={index}
                                day={day}
                                index={index}
                              />
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {info.group_inf.schedule.map((item, index) =>
                            isMobile ? (
                              item && <TableCell key={index} time={item} />
                            ) : (
                              <TableCell key={index} time={item} />
                            )
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : (
                  <p className={baseStyles.text}>
                    Название группы:{' '}
                    <span className={baseStyles.redText}>
                      не состоит в группе
                    </span>
                  </p>
                )}
              </React.Fragment>
            ))
          ) : (
            <p className={baseStyles.text}>
              Ребенок: <span className={baseStyles.redText}>не закреплен</span>
            </p>
          )}
        </div>
      </main>
    </>
  );
}
