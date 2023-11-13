import './main.css';

export default function MainPage() {
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
        <div className="container main__container">
          <h1 className="main__title">
            Добро пожаловать в сервис «Журнал тренера»
          </h1>
          <p className="main__text">
            Здесь вы можете отслеживать и оплачивать задолженность
          </p>
          <div className="input-group">
            <button className="btn btn--blue btn--large">Войти</button>
            <button className="btn btn--red btn--large">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
