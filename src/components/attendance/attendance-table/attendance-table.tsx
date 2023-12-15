import AttendanceSelect from '../attendance-select/attendance-select';
import baseStyles from '../../../pages/base.module.css';
import styles from '../../../pages/attendance-page/attendance.module.css';
import cn from 'classnames';
import { getFullName, getShortName } from '../../../utils/names';
import { useEffect, useState } from 'react';
import AttendanceHeader from '../../ui/attendance-header/attendance-header';
import { useIsMobile } from '../../../hooks/use-is-mobile';
import { useAppDispatch } from '../../../hooks';
import { GroupAttendance } from '../../../types/group';
import {
  getMonday,
  getNextMonday,
  getPreviosMonday,
} from '../../../utils/time';
import { fetchAttendance } from '../../../store/group-data/api-actions';
import AttendanceCell from '../attendance-cell/attendance-cell';

export default function AttendanceTable() {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const [attendanceState, setAttendanceState] =
    useState<GroupAttendance | null>(null);
  const [groupName, setGroupName] = useState('');
  const [startDate, setStartDate] = useState(getMonday());

  useEffect(() => {
    if (groupName !== '') {
      dispatch(
        fetchAttendance({ groupName: groupName, startDate: startDate })
      ).then((data) => setAttendanceState(data.payload as GroupAttendance));
      setStartDate(getMonday());
    }
  }, [groupName, dispatch, startDate]);

  return (
    <>
      <AttendanceSelect groupName={groupName} setGroupName={setGroupName} />

      {attendanceState && attendanceState.children_attendance.length !== 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={styles.tableHeaderContainer}>
                    ФИО ребенка:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previous week"
                      onClick={() => setStartDate(getPreviosMonday())}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                      >
                        <path
                          d="M9.5 1L1 9.5L9.5 18"
                          stroke="black"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button
                      className={styles.tableArrow}
                      aria-label="Next week"
                      onClick={() => setStartDate(getNextMonday())}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="19"
                        viewBox="0 0 11 19"
                        fill="none"
                      >
                        <path
                          d="M1 18L9.5 9.5L1 1"
                          stroke="black"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </th>
                {attendanceState.schedule.map((day) =>
                  isMobile ? (
                    day.is_training && (
                      <AttendanceHeader key={day.date} day={day} />
                    )
                  ) : (
                    <AttendanceHeader key={day.date} day={day} />
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {attendanceState.children_attendance.map((child) => (
                <tr key={child.id}>
                  <td className={styles.tableCell}>
                    {isMobile
                      ? getShortName(getFullName(child))
                      : getFullName(child)}
                  </td>
                  {child.attendance.map((day) =>
                    isMobile ? (
                      day.is_training !== null && (
                        <AttendanceCell
                          key={`${child.id}-${day.date}`}
                          childId={child.id}
                          day={day}
                          setAttendanceState={setAttendanceState}
                        />
                      )
                    ) : (
                      <AttendanceCell
                        key={`${child.id}-${day.date}`}
                        childId={child.id}
                        day={day}
                        setAttendanceState={setAttendanceState}
                      />
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className={cn(
              baseStyles.btn,
              baseStyles.btnRed,
              baseStyles.btnLarge
            )}
            aria-label="Сохранить изменения"
          >
            Сохранить изменения
          </button>
        </>
      ) : (
        <p className={baseStyles.failText}>
          По вашему запросу ничего не найдено
        </p>
      )}
    </>
  );
}
