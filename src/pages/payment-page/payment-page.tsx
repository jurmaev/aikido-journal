import './payment.css';

export default function PaymentPage() {
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
        <div className="container payment__container">
          <h1 className="payment__title">Задолженность</h1>
          <h2 className="payment__subtitle">Задолженность по оплате</h2>
          <div className="input-group payment__input-group">
            <input
              className="form__input payment__input"
              type="text"
              placeholder="Введите ФИО родителя"
            />
            <button className="btn btn--blue btn--large">Поиск</button>
          </div>
          <ul className="payment__list">
            <li className="payment__item">
              Абрамова Маргарита Львовна : 1750 рублей
            </li>
            <li className="payment__item">
              Курочкина Светлана Алексеевна : 1000 рублей
            </li>
            <li className="payment__item">
              Иванова Наталья Сергеевна : 500 рублей
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
