export default function RegisterPage() {
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
          <button className="btn btn--blue btn--small header__btn">
            Войти
          </button>
        </div>
      </header>
      <main>
        <form className="form">
          <div className="form__container">
            <h1 className="form__title">Регистрация</h1>
            <label htmlFor="number" className="form__label">
              Введите ваше ФИО
            </label>
            <input
              type="text"
              className="form__input"
              id="name"
              placeholder="Иванова Елизавета Петровна"
            />
            <label htmlFor="name" className="form__label">
              Введите номер телефона
            </label>
            <input
              type="tel"
              className="form__input"
              id="number"
              placeholder="+7 (___) ___-__-__"
            />
            <label htmlFor="password" className="form__label">
              Придумайте пароль
            </label>
            <input
              type="password"
              className="form__input"
              id="password"
              placeholder="**********"
            />
            <button className="btn btn--red btn--large">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
