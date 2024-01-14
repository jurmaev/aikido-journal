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
  getStartDateString,
} from '../../../utils/datetime';
import {
  fetchAttendance,
  fetchAttendanceForMonth,
  setAttendance,
} from '../../../store/group-data/api-actions';
import AttendanceCell from '../attendance-cell/attendance-cell';

export default function AttendanceTable() {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const [attendanceState, setAttendanceState] =
    useState<GroupAttendance | null>(null);
  const [groupName, setGroupName] = useState('');
  const [message, setMessage] = useState('');
  const hasSchedule = attendanceState?.schedule.some((day) => day.is_training);
  const [startDate, setStartDate] = useState(getMonday(new Date()));
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (groupName !== '') {
      if (!isMobile) {
        dispatch(
          fetchAttendanceForMonth({
            groupName: groupName,
            year: startDate.getFullYear(),
            month: startDate.getMonth() + 1,
          })
        ).then((data) => setAttendanceState(data.payload as GroupAttendance));
      } else {
        dispatch(
          fetchAttendance({
            groupName: groupName,
            startDate: getStartDateString(startDate),
          })
        ).then((data) => setAttendanceState(data.payload as GroupAttendance));
      }
    }
  }, [groupName, dispatch, startDate, isMobile]);

  function handleButtonClick() {
    if (attendanceState) {
      dispatch(
        setAttendance({
          groupName: groupName,
          startDate: getStartDateString(startDate),
          childAttendance: attendanceState.children_attendance,
        })
      );
      setMessage('Изменения сохранены');
      setCanEdit(false);
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  }

  function handlePreviousButtonClick() {
    if (!isMobile) {
      const newDate = new Date(startDate);
      newDate.setMonth(newDate.getMonth() - 1);
      setStartDate(newDate);
    } else {
      setStartDate(getPreviosMonday(startDate));
    }
  }

  function handleNextButtonClick() {
    if (!isMobile) {
      const newDate = new Date(startDate);
      newDate.setMonth(newDate.getMonth() + 1);
      setStartDate(newDate);
    } else {
      setStartDate(getNextMonday(startDate));
    }
  }

  return (
    <>
      <AttendanceSelect
        groupName={groupName}
        setGroupName={setGroupName}
        setStartDate={setStartDate}
      />

      {!hasSchedule ? (
        <p className={baseStyles.failText}>
          В этой группе не добавлено расписание
        </p>
      ) : attendanceState &&
        attendanceState.children_attendance.length === 0 &&
        groupName !== '' ? (
        <p className={baseStyles.failText}>В этой группе не добавлены дети</p>
      ) : attendanceState &&
        attendanceState.children_attendance.length !== 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={styles.tableHeaderContainer}>
                    Ребёнок:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previous"
                      onClick={handlePreviousButtonClick}
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
                      aria-label="Next"
                      onClick={handleNextButtonClick}
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
                {attendanceState.schedule.map(
                  (day) =>
                    day.is_training && (
                      <AttendanceHeader
                        key={day.date}
                        day={day}
                        canEdit={canEdit || isMobile}
                      />
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
                  {child.attendance.map(
                    (day) =>
                      day.is_training !== null && (
                        <AttendanceCell
                          key={`${child.id}-${day.date}`}
                          childId={child.id}
                          day={day}
                          setAttendanceState={setAttendanceState}
                          canEdit={canEdit || isMobile}
                        />
                      )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <p className={baseStyles.redText}>{message}</p>
          <div className={baseStyles.inputGroup}>
            {!isMobile && <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnBlue,
                baseStyles.btnLarge
              )}
              onClick={() => setCanEdit(!canEdit)}
              disabled={canEdit}
            >
              Редактировать прошедшие дни
            </button>}
            <button
              className={cn(
                baseStyles.btn,
                baseStyles.btnRed,
                baseStyles.btnLarge
              )}
              aria-label="Сохранить изменения"
              onClick={handleButtonClick}
            >
              Сохранить изменения
            </button>
          </div>
        </>
      ) : (
        <p className={baseStyles.failText}>
          По вашему запросу ничего не найдено
        </p>
      )}
    </>
  );
}
