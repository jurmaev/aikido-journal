import './parents.css';

export default function ParentsPage() {
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
                <a href="#">Профиль</a>
              </li>
              <li className="nav__item">
                <a href="#">Расписание</a>
              </li>
              <li className="nav__item">
                <a href="#">Посещаемость</a>
              </li>
            </ul>
          </nav>
          <button className="btn btn--blue btn--small header__btn">
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className="container parents__container">
          <h1 className="parents__header">Родители</h1>
          <label htmlFor="search" className="parents__label">
            Список (Родитель/Ребёнок)
          </label>
          <div className="input-group parents-input-group">
            <input
              type="text"
              className="form__input parents__input"
              id="search"
              placeholder="Введите ФИО родителя"
            />
            <button className="btn btn--blue btn--large">Поиск</button>
          </div>
          <table className="parents__table">
            <thead>
              <tr>
                <th className="parents__data">Родитель</th>
                <th className="parents__data">Ребёнок</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Абрамова Маргарита Львовна
                    <button className="btn parents__btn" aria-label="Info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="tooltip">
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Абрамов Пётр Иванович
                    <button className="btn parents__btn" aria-label="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Курочкина Светлана Алексеевна
                    <button className="btn parents__btn" aria-label="Info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="tooltip">
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Курочкин Владислав Игорьевич
                    <button className="btn parents__btn" aria-label="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Иванова Наталья Сергеевна
                    <button className="btn parents__btn" aria-label="Info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="tooltip">
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Иванов Александр Степанович
                    <button className="btn parents__btn" aria-label="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="parents__data">
                  <div className="parents-data__container">
                    Терешенко Екатерина Николаевна
                    <button className="btn parents__btn" aria-label="Info">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V12"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 16H12.01"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="tooltip">
                        <a href="tel:+8-800-555-35-35">8(800)555-35-35</a>
                      </div>
                    </button>
                  </div>
                </td>
                <td className="parents__data parents__data--empty">
                  <div className="parents-data__container">
                    ребёнок не закреплён
                    <button className="btn parents__btn" aria-label="Edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.9403 20H20.8061"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2539 3.49998C16.6458 3.10216 17.1773 2.87866 17.7315 2.87866C18.0059 2.87866 18.2776 2.93353 18.5312 3.04014C18.7847 3.14674 19.0151 3.303 19.2091 3.49998C19.4032 3.69697 19.5571 3.93082 19.6621 4.18819C19.7671 4.44556 19.8212 4.72141 19.8212 4.99998C19.8212 5.27856 19.7671 5.55441 19.6621 5.81178C19.5571 6.06915 19.4032 6.303 19.2091 6.49998L6.89554 19L2.9552 20L3.94029 16L16.2539 3.49998Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
