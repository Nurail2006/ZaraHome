import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import Logo from '../../assets/svg/logo.svg';
import hal from '../../assets/svg/hal.svg';
import sarBlack from '../../assets/svg/sarBlack.svg';
import corzinBlack from '../../assets/svg/corzinBlack.svg';


function Header() {
  return (
  <div>
      <div className='a1'>
      <div className='a2'>

        <div className='a21'>
        <h4>8 (800) 000 80 00</h4>
        <p>Работаем сегодня с 9:00 до 20:00</p>
        </div>

     <img src={Logo} alt="" />
    <div className='a22'>
     <div className="list"></div>

    <Link>
    <img src={hal} alt="" /></Link>

     <div className="list"></div>

     <Link>
     <img src={sarBlack} alt="" /></Link>

      <div className="list"></div>

     <Link to="/cart">
     <img src={corzinBlack} alt="" /><p>100 ₽</p></Link>

      
      <div className="list"></div>
      </div>
    </div>
    <hr />
      <div className="b1">
        <a>
          <Link to="/">Все товары</Link>
        </a>
        <a>
          <Link to="/Discounts">Скидки</Link>
        </a>
        <a>
          <Link to="/Newitems">Новинки</Link>
        </a>
        <a>
          <Link to="/WInformation">Информация</Link>
        </a>
      </div>
      
    </div>
  </div>
  )
}

export default Header;