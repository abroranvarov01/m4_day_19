import React from "react";
import Logo from "../../assets/Logo.svg";
import Loop from "../../assets/searchLoop.svg/";

export const Header = () => {
  return (
    <div className="header">
      <div className="hero__block">
        <a href="">
          <img src={Logo} alt="ilogo" />
        </a>
        <div className="header_mid">
          <p className="header__select">Рукнлар</p>
          <form className="header__form">
            <input
              placeholder="Қидириш"
              className="header__input"
              type="text"
            />
            <button className="header__input__btn"></button>
          </form>
        </div>
      </div>
      <div className="hero__second__block">
        <p className="header__select_lang">Ўз</p>
        <a className="header__login" href="#">
        Кириш
        </a>
      </div>
    </div>
  );
};
