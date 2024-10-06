import React from 'react';
import '../cartDisco/Cartdisco.scss';
import corzin from '../../assets/svg/corzin.svg';
import sar from '../../assets/svg/sar.svg';

function Cartdisco({data}) {
  
  return (
    <div className='car'>
       <div className="cart1">
      <div className="images">
        <img src={data.images[2]} alt="" />
      </div>
      <div className="icons">
          <img src={sar} alt="" />
        </div>
      <div className="info">
        <h3>{data.title}</h3>
        <div className="prices">
          <p className='pri-1'>{data.price}₽</p>
          <p className='pri-2'>{data.price + 30}₽</p>
        </div>
        <button className=''>в корзину<img src={corzin} alt="" /></button>
      </div>  
    </div>
    </div>
   
    
  )
}

export default Cartdisco;