import './children.css';

export default function ChildrenPage() {
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
        <div className="container children__container">
          <h1 className="children__title">Дети</h1>
          <label htmlFor="child" className="children__label">
            Добавить ребёнка
          </label>
          <div className="input-group children-input-group">
            <input
              type="text"
              className="form__input children__input"
              id="child"
              placeholder="Введите ФИО родителя"
            />
            <button className="btn btn--red btn--large">
              Добавить ребёнка
            </button>
          </div>
          <label htmlFor="search" className="children__label">
            Список детей
          </label>
          <div className="input-group children-input-group">
            <input
              type="text"
              className="form__input children__input"
              id="search"
              placeholder="Введите ФИО ребёнка"
            />
            <button className="btn btn--blue btn--large">Поиск</button>
          </div>
          <ul className="children__list">
            <li className="children__item">
              <span className="children__text">Абрамов Пётр Иванович</span>
              <svg
                className="children__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="children__item">
              <span className="children__text">
                Курочкин Владислав Игорьевич
              </span>
              <svg
                className="children__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li className="children__item">
              <span className="children__text">
                Иванов Александр Степанович
              </span>
              <svg
                className="children__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
