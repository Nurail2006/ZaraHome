import React from 'react';
import "./Footer.scss";
import Logo from "../../assets/svg/logo.svg";

function Footer() {
  return (
    <div>
      <div className="fot-a1">
        <hr />
       <div className="fot-a2">

        <div className="fot-mag1">
          <h2>Магазин</h2>
              <a href="#">Спальня</a>
              <a href="#">Одежда и обувь</a>
              <a href="#">Гостиная</a>
              <a href="#">Кухня</a>
              <a href="#">Ванная комната</a>
        </div>

        <div className="fot-mag2">
           
            <a href="#">Экстра</a>
            <a href="#">Для детей</a>
  
        </div>

        <div className="list"></div>

        <div className="fot-pom">
          <h2>Помощь</h2>
            <a href="#">Информация о сроках доставки</a>
            <a href="#">Пользовательское соглашение</a>
        </div>

        <div className="list"></div>

        <div className="fot-cont">
          <h2>Контакты</h2>
            <a href="#">info@зарахоум.рф</a>
        </div>

       </div>
       <hr />
       <div className="niz">
        <p>Содержание этого сайта защищено авторским правом и является собственностью ZARAHOME. ZARAHOME стремится к доступности.</p>

        <img src={Logo} alt="" />

        <h5>© 2023 ZARAHOME. Все прова защищены.</h5>
      </div>
      </div>
    </div>
  )
}

export default Footer