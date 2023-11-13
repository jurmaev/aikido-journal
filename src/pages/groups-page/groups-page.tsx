import './groups.css';

export default function GroupsPage() {
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
          <button className="btn btn--blue btn--small header__btn">
            Войти
          </button>
        </div>
      </header>
      <main>
        <div className="container groups__container">
          <h1 className="groups__title">Группы</h1>
          <label htmlFor="group" className="groups__label">
            Создать группу
          </label>
          <div className="input-group groups-input-group">
            <input
              type="text"
              className="form__input groups__input"
              id="group"
              placeholder="Придумайте название группы"
            />
            <button className="btn btn--red btn--large">Создать</button>
          </div>
          <label htmlFor="list" className="groups__label">
            Список групп
          </label>
          <div className="input-group groups-input-group">
            <input
              type="text"
              className="form__input groups__input"
              id="list"
              placeholder="Введите название группы"
            />
            <button className="btn btn--blue btn--large">Поиск</button>
          </div>
          <ul className="groups__list">
            <li className="groups__item">
              <span>Группа 1</span>
              <button className="btn groups__btn" aria-label="Edit group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="groups__item">
              <span>Группа 2</span>
              <button className="btn groups__btn" aria-label="Edit group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className="groups__item">
              <span>Группа 3</span>
              <button className="btn groups__btn" aria-label="Edit group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9404 20.0002H20.8062"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.254 3.50023C16.6459 3.1024 17.1774 2.87891 17.7316 2.87891C18.006 2.87891 18.2778 2.93378 18.5313 3.04038C18.7848 3.14699 19.0152 3.30324 19.2092 3.50023C19.4033 3.69721 19.5572 3.93106 19.6622 4.18843C19.7672 4.4458 19.8213 4.72165 19.8213 5.00023C19.8213 5.2788 19.7672 5.55465 19.6622 5.81202C19.5572 6.06939 19.4033 6.30324 19.2092 6.50023L6.89567 19.0002L2.95532 20.0002L3.94041 16.0002L16.254 3.50023Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
