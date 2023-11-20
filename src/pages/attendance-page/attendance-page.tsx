import baseStyles from '../base.module.css';
import styles, { tableHeaderContainer } from './attendance.module.css';
import { Days, NavItems } from '../../const';
import Header from '../../components/header/header';
import { attendance } from '../../mocks/attendance';

export default function AttendancePage() {
  const isMobile = window.innerWidth < 1024;
  const currentAttendance = attendance[0];
  const groups = attendance.map((groupAttendance) => {
    return { id: groupAttendance.id, name: groupAttendance.name };
  });

  return (
    <>
      <Header navItems={NavItems.Trainer} />
      <main>
        <div
          className={`${baseStyles.container} ${styles.attendanceContainer}`}
        >
          <h1 className={`${styles.attendanceTitle}`}>Посещаемость</h1>
          <div
            className={`${baseStyles.inputGroup} ${styles.attendanceInputGroup}`}
          >
            <select
              name="group"
              id="group"
              className={`${baseStyles.formInput} ${styles.attendanceSelect}`}
              aria-label="Select group"
            >
              <option value="">Выберите группу</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <select
              name="month"
              id="month"
              className={`${baseStyles.formInput} ${styles.attendanceSelect}`}
              aria-label="Select month"
            >
              <option value="">Выберите месяц</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th className={styles.tableHeader}>
                  <div className={tableHeaderContainer}>
                    ФИО ребенка:
                    <button
                      className={styles.tableArrow}
                      aria-label="Previous week"
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
                {currentAttendance.schedule.map((day) => (
                  <th
                    key={day.date}
                    className={`${styles.tableHeader} ${
                      !day.isTraining && styles.tableHeaderInactive
                    }`}
                  >
                    <div>{`${new Date(day.date).getDate()}.${new Date(
                      day.date
                    ).getMonth()}`}</div>
                    <div>{Days[new Date(day.date).getDay()]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentAttendance.children.map((child) => (
                <tr key={child.id}>
                  <td className={styles.tableCell}>{child.name}</td>
                  {child.attendance.map((day) => (
                    <td key={day.date} className={styles.tableCell}>
                      <button
                        className={`${styles.tableCheck} ${
                          day.isTraining && styles.tableCheckChecked
                        }`}
                        aria-label="Check"
                        disabled={day.isTraining === null}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M15 4.5L6.75 12.75L3 9"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className={`${baseStyles.btn} ${baseStyles.btnRed} ${baseStyles.btnLarge}`}
            aria-label="Сохранить изменения"
          >
            Сохранить изменения
          </button>
        </div>
      </main>
    </>
  );
}
