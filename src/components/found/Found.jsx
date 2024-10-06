import React from 'react';
import "./Found.scss";
import telegram from "../../assets/svg/telegram.svg";
import zen from "../../assets/svg/zen.svg";
import wk from "../../assets/svg/wk.svg";

function Found() {
  return (
    <div className='F1'>
        <div className="f2">
        <h1 className='fw-normal'>Не нашли ответ на свой вопрос?</h1>
        <p>Мы всегда готовы прийти на помощь</p>
        </div>

        <div className="f3">
        <div className="f4">
            <img src={telegram} alt="" />
            <h3  className='fw-normal'>Задайте его нам</h3>
            <p>Напишите в наш Telegram</p>
        </div>
        <div className="f4">
            <img src={zen} alt="" />
            <h3  className='fw-normal'>Наши статьи в Дзен</h3>
            <p>Все самое полезное для вас мы собрали тут</p>
        </div>
        <div className="f4">
            <img src={wk} alt="" />
            <h3  className='fw-normal'>Присоединяйтесь</h3>
            <p>Наше сообщество с радостью вас приймет</p>
        </div>
        </div>
    </div>
  )
}

export default Found