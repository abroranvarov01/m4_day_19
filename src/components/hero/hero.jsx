import React from "react";
import Book1 from "../../assets/book_1.png";
import Book2 from "../../assets/book_2.png";
import Book3 from "../../assets/book_3.png";

export const Hero = () => {
  return (
    <div className="hero">
      <ul className="hero__list">
        <li className="hero__list__item">
          <p className="hero__Item__text">Аудиокитоб</p>
        </li>
        <li className="hero__list__item">
          <p className="hero__Item__text">Электрон китоблар</p>
        </li>
        <li className="hero__list__item">
          <p className="hero__Item__text">Босма китоблар</p>
        </li>
        <li className="hero__list__item">
          <p className="hero__Item__text">Контакт</p>
        </li>
        <li className="hero__list__item">
          <p className="hero__Item__text">Биз хақимизда</p>
        </li>
      </ul>
      <div className="hero__banner__block">
        <div className="hero__banner">
          <h2 className="hero__banner__title">Кўп ўқилаётганлар</h2>
          <div className="hero_banner_wrap">
            <ul className="hero_banner_list">
              <li className="hero_benner__item">
                <img src={Book1} alt="img" />
                <p className="hero__banner__item__text">1984</p>
              </li>
              <li className="hero_benner__item">
                <img src={Book2} alt="img" />
                <p className="hero__banner__item__text">Code 8</p>
              </li>
              <li className="hero_benner__item">
                <img src={Book3} alt="img" />
                <p className="hero__banner__item__text">Rich dad poor dad</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero_subscribe">
          <h2 className="hero_subscribe_title">Китоб ўқишни ёқтирасизми?</h2>
          <p className="hero_subscribe_text">
            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
          </p>
          <button className="hero_subscribe_btn">Обуна бўлиш</button>
        </div>
      </div>
    </div>
  );
};
