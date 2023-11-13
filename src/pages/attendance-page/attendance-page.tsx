import './attendance.css';

export default function AttendancePage() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a href="#">
            <img
              src="./img/logo.svg"
              alt="Aikido journal logo"
              className="logo"
            />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#">Дети</a>
              </li>
              <li className="nav__item">
                <a href="#">Родители</a>
              </li>
              <li className="nav__item">
                <a href="#">Группы</a>
              </li>
              <li className="nav__item">
                <a href="#">Посещаемость</a>
              </li>
              <li className="nav__item">
                <a href="#">Задолженность</a>
              </li>
            </ul>
          </nav>
          <button
            className="btn btn--blue btn--small header__btn"
            aria-label="Войти"
          >
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className="container attendance__container">
          <h1 className="attendance__title">Посещаемость</h1>
          <div className="input-group attendance__input-group">
            <select
              name="group"
              id="group"
              className="form__input attendance__select"
              aria-label="Select group"
            >
              <option value="">Выберите группу</option>
            </select>
            <select
              name="month"
              id="month"
              className="form__input attendance__select"
              aria-label="Select month"
            >
              <option value="">Выберите месяц</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th className="table__header">
                  <div className="table-header__container">
                    ФИО ребенка:
                    <button className="table__arrow" aria-label="Previous week">
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
                    <button className="table__arrow" aria-label="Next week">
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
                <th className="table__header">
                  <div>06.11</div>
                  <div>пн</div>
                </th>
                <th className="table__header table__header--inactive">
                  <div>07.11</div>
                  <div>вт</div>
                </th>
                <th className="table__header">
                  <div>08.11</div>
                  <div>ср</div>
                </th>
                <th className="table__header table__header--inactive">
                  <div>09.11</div>
                  <div>чт</div>
                </th>
                <th className="table__header">
                  <div>10.11</div>
                  <div>пт</div>
                </th>
                <th className="table__header table__header--inactive">
                  <div>11.11</div>
                  <div>сб</div>
                </th>
                <th className="table__header table__header--inactive">
                  <div>12.11</div>
                  <div>вс</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table__cell">Абрамов Пётр Иванович</td>
                <td className="table__cell">
                  <button className="table__check" aria-label="Check">
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
              </tr>
              <tr>
                <td className="table__cell">Иванов Александр Степанович</td>
                <td className="table__cell">
                  <button className="table__check" aria-label="Check">
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
              </tr>
              <tr>
                <td className="table__cell">Курочкин Владислав Игорьевич</td>
                <td className="table__cell">
                  <button className="table__check" aria-label="Check">
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button
                    className="table__check table__check--checked"
                    aria-label="Check"
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
                <td className="table__cell">
                  <button className="table__check" aria-label="Check" disabled>
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
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn--red btn--large"
            aria-label="Сохранить изменения"
          >
            Сохранить изменения
          </button>
        </div>
      </main>
    </>
  );
}
