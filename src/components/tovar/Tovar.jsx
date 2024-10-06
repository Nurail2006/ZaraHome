import React from 'react';
import './Tovar.scss';
import corzin from "../../assets/svg/corzin.svg";
import sar from "../../assets/svg/sar.svg";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice.js';

function Tovar({data}) {
  const dispatch = useDispatch()
  return (
    <div className='car'>
    <div className="cart1">
   <div className="images">
     <img src={data.images[0]} alt="" />
   </div>
   <div className="icons">
       <img src={sar} alt="" />
     </div>
   <div className="info">
     <h3>{data.title}</h3>
     <div className="prices">
       <p className='pri-1'>{data.price}₽</p>
     </div>
     <button onClick={() => dispatch(addToCart(data))} className=''>в корзину<img src={corzin} alt="corzin" /></button>
   </div>  
 </div>
 </div>
  )
}

export default Tovar;